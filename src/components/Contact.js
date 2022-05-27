import React from 'react'
import contactImg from '../photos/contact.jpg'
import { Button } from '@mui/material'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';

const Contact = () => {

    const sendEmail = (e) => {
       e.preventDefault(); 

       emailjs.sendForm('service_v7a7dwm', 'template_lozxxwu',e.target, '67nYuAIUAYxpPSx7W')//.then(res=>{
    //        console.log(res);
    //    }).catch(err=>console.log(err)); 
       toast.success("Your mesaage Received");
    }


    return (
        <div>
            <div className="content">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">


                            <div className="row justify-content-center">
                                <div className="col-md-6">

                                    <div className="weOffers mb-4" style={{ fontWeight: "bold" }}>
                                        <h3>Get in Touch</h3>
                                    </div>
                                    <p className="lead">Please reach out with questions or requests for services. We would love to see what you are working on and how we can help!
                                    </p>

                                    <img src={contactImg} alt="Contactimg" className="img-fluid" />
                                </div>
                                <div className="col-md-6">

                                    <form className="Cform mb-5" onSubmit={sendEmail} >
                                        <div className="row mb-4">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control"  required name="name" id="name" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-md-12 form-group">
                                                <input type="email" className="form-control"  required name="user_email" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" required  name="subject" id="subject" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <textarea className="form-control" name="message" minLength={10} required id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 m-3">
                                            <Button type="submit" variant="contained" size="large">send message</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact