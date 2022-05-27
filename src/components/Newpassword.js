import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';


const Newpassword = () => {
    const navigate = useNavigate()
    const [password, setPasword] = useState("")
    const { token } = useParams()
    // console.log(token)

    const PostData = async () => {

        // eslint-disable-next-line
        const response = await fetch("http://localhost:5000/api/auth/new-password", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, token })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    toast.error("user not found in system");
                }
                else {
                    toast.success("password updated successfully");
                    navigate('/login')
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="container" style={{ marginTop: "4.8rem", marginRight: "0px" }}>
                <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3"> Enter new password</label>
                        <input type="password" value={password} onChange={(e) => setPasword(e.target.value)} className="form-control form-control-lg" name="password" required autocomplet={"new-password"}
                            placeholder="Enter new password" style={{ backgroundColor: "#eaedf0" }} />
                    </div>
                    <div className="text-center text-lg-start mt-2">
                        <button disabled={password.length<8} onClick={() => PostData()} className="btn btn-outline-warning btn-lg">update password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newpassword