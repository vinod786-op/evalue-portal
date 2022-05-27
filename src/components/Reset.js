import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const Reset = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    // if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    //   toast.error("invalid email");
    //   return
    // }
    // eslint-disable-next-line
      const response = await fetch("http://localhost:5000/api/auth/reset-password", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          toast.error("user not found in system");
        }
        else {
          toast.success("Please check your Email")
          navigate('/login')
        }
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "4.8rem", marginRight: "0px" }}>
          <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3"> Enter valid Email address</label>
              <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control form-control-lg" required autoComplete={"off"}
                placeholder="Enter email address" style={{ backgroundColor: "#eaedf0" }} />
            </div>
            <div className="text-center text-lg-start mt-2">
              <button type="submit"  className="btn btn-outline-warning btn-lg">send link</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Reset