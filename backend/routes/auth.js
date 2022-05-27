const express = require('express');
const router = express.Router();
const User = require('../models/User')
//To generate uniquie and secure token 
const crypto = require('crypto');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
//Nodemailer to send mail 
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

//To send Email for the forgot password
const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: "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"
  }
}))

const JWT_SECRET = 'vinod$boy';

// Route 1: Create a User using: POST "/api/auth/createuser". Doesn't require Auth. No login Required
router.post('/createuser', [
  body('email', 'Enter valid Email Address').isEmail(),
  body('password', 'password must be minimum 8 character').isLength({ min: 8 }),
], async (req, res) => {
  //IF there are errors, then return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {

    //check whether the user with this email aready exists 
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "sorry a user with this email already exists" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    //Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
      role: req.body.role,
    })
    const data = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);

    // res.json(user)  
    res.json({ authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//Fetch all users details, admin 
router.get('/fetchalluser', fetchuser, async (req, res) => {
      const user = await User.find({user: req.user});
      res.json(user)
})

//Update the user details ...........................................................................
router.put('/updateuser/:id',fetchuser, async (req, res) => {
const {name, email, role, password} = req.body;
//create new user object
const newUser = {};
if(name){newUser.name = name};
if(email){newUser.email = email};
if(password){newUser.password = password};
if(role){newUser.role = role};role

     //Find the user will be updated and update it
    let user = await  User.findById(req.params.id);
    if(!user){return res.status(404).send("note found")}

    // if(user.user.toString() !== req.user.id){
    //   return res.status(401).send("Not Allowed");
       
    // }

    user = await User.findByIdAndUpdate(req.params.id, {$set: newUser},{ new:true})
    res.json({user});
})

//Delete the User in the database......................................................
router.delete('/deleteuser/:id',  fetchuser, async (req, res) => {
  const {name, email, role, password} = req.body;
    try {
      //Find the user will be deleted and delete it
     let user = await User.findById(req.params.id);
     if (!user) { return res.status(404).send("Not Found") }

      // Allow deletion only if user owns this user
      // if (user.user.toString() !== req.user.id) {
      //   return res.status(401).send("Not Allowed");
      //   }

        user = await User.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted"});
      
    } catch (error) {
      console.error(error.message)
        res.status(500).send("Internal Server Error");
    }
  })

//Route 2: authenticate user using: POST "/api/auth/login". No login Required
router.post('/login', [
  body('email', 'Enter valid Email Address').isEmail(),
  body('password', 'password can not be blank').exists().isLength({ min: 8 }),
], async (req, res) => {
  let success = false;

  //IF there are errors, then return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //Destructhering to remove outside validation required feild
  const { email, password, role } = req.body;
  try {
    let user = await User.findOne({ email, role });
    if (!user) {
      return res.status(400).json({ errors: "please try to login with valid credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ success, errors: "please try to login with valid credentials" });
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })


  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error");
  }

})

//Route 3 Get login user Details using: POST "/api/auth/getuser".  login Required
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//Route4 forgot password using: Post "/api/auth/reset"
router.post('/reset-password', async (req, res) => {
  crypto.randomBytes(30, (err, buffer) => {
    if (err) {
      console.log(err)
    }

    const token = buffer.toString("hex")
    const user = User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(422).json({ error: "User dose not exists with this email" });
        }
        user.resetToken = token
        user.expireToken = Date.now() + 900000 //milliseconds
        user.save().then((result) => {
          transporter.sendMail({
            to: user.email,
            from: "techtoday898@gmail.com",
            subject: "password reset",
            html: `
          <p> You requested for password reset</p>
          <h5> Click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset your password</h5>
          `
          })
          res.json({ message: "check your email" })
        })
      })
  })
})

// Route5 update new passwowrd: Post "/api/auth/reset"
router.post('/new-password', async (req, res) => {
  const newPassword = req.body.password
  const sentToken = req.body.token
  const user = await User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then(user => {
      if (!user) {
        return res.status(422).json({ error: "Try again session expired" })
      }
      bcrypt.hash(newPassword, 10).then(hashedpassword => {
        user.password = hashedpassword
        user.resetToken = undefined
        user.expireToken = undefined
        user.save().then((saveduser) => {
          res.json({ message: "password updated successfuly" })
        })
      })
    }).catch(err => {
      console.log(err)
    })

})



module.exports = router;