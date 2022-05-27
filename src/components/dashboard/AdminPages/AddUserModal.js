import React,{useContext, useState, useRef} from 'react'
import userContext from '../../../context/userContext';
import { FaUserAlt } from "react-icons/fa"
import { toast } from 'react-toastify';

const AddUserModal = () => {
    const context = useContext(userContext);
    const { addUser} = context;   // Add New User

     const refClose = useRef(null)
     const [user, setUser] = useState({name: "", email: "", role: "", password: ""})

     const handleClick = (e)=>{
         e.preventDefault();
         addUser(user.name, user.email, user.role, user.password);
        refClose.current.click();
        setUser({name: "", email: "", role: "", password: ""})
        toast.success("User added Successfully");


     }

     const onChange= (e)=>{
        setUser({...user,[e.target.name]: e.target.value})
     }

    return (
        <div>
            {/* Button trigger modal  */}
            <div className="container" style={{marginTop:"20px", float: "right"}}>
                <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"> {<FaUserAlt />}
                    Add new User
                </button>
            </div>

            {/* Modal  */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add user Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="text" name="name" placeholder="Enter name" value={user.name} className="form-control" id="name" onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" placeholder="Enter Valid Email"  value={user.email}className="form-control" id="email" onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                <select className="form-select" name="role" onChange={onChange} value={user.role} id="role" aria-label="Default select example">
                                    <option defaultValue>select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="publisher">publisher</option>
                                    <option value="employee">Employee</option>
                                </select>
                                </div>
                                <div className="mb-3">
                                    <input type="password" autoComplete={"off"} name="password"  value={user.password} placeholder="Enter default password" className="form-control" onChange={onChange} id="password" minLength={8} required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" ref={refClose} className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" disabled={user.name.length<3 || user.password.length<8 ||user.role.length===null || user.email.length<5} className="btn btn-warning" onClick={handleClick}>Add user</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserModal