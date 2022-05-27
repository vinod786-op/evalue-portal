import React, { useState } from 'react'
import loginImg from '../photos/login.jpg'
import {useNavigate} from 'react-router-dom'
//To show Alert messaage
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
 
    //To show Error and success login message 


    const [credentials, setCredentials] = useState({ email: "", password: "", role: ""})
    const navigate = useNavigate();

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password, role: credentials.role })
        });
        
        const json = await response.json();
        // console.log(json); //TO display the autotoken in the console
            if (json.success && credentials.role === 'admin') {
            //save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            toast.success("login Successfully");
            navigate("/admin");
        }
      else if(json.success && credentials.role ==='publisher'){
                 //save the auth token and redirect
                 toast.success("login Successfully");
                 localStorage.setItem('token', json.authtoken);
                 navigate("/publisher");
          }
       else if(json.success && credentials.role ==='employee'){
                //save the auth token and redirect
                localStorage.setItem('token', json.authtoken);
                toast.success("login Successfully");
                navigate("/employee");
            }
       else{
            toast.error("invalid credentials");
        } 
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }


    return (
        <div>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={loginImg} className="img-fluid" alt="loginimg" />
                    </div>


                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                  <div>
                    <select className="form-select form-select-lg" id="role" name="role" value={credentials.role}  onChange={onChange} style={{ backgroundColor: "aliceblue", fontWeight: "500" }}>
                        <option defaultValue >Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="publisher">publisher</option>
                        <option value="employee">Employee</option>
                    </select>
                  </div>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="email" id="email" name="email" value={credentials.email} onChange={onChange} className="form-control form-control-lg" required
                                    placeholder="Enter a valid email address" style={{ backgroundColor: "#eaedf0" }} />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} className="form-control form-control-lg" autoComplete="off"
                                    placeholder="Enter password" required style={{ backgroundColor: "#eaedf0" }} />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <Link to="/Reset" className="link-danger">Forgot password?</Link>
                            </div>
                              <div className="text-center text-lg-start mt-4 pt-2">
                                <button disabled={credentials.email.length<8 || credentials.password.length<8 || credentials.role.length===0} type="submit" className="btn btn-primary btn-lg">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Login