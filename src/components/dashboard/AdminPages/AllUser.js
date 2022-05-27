import React, { useContext, useEffect, useRef, useState } from 'react'
import AddUserModal from './AddUserModal';
import userContext from '../../../context/userContext';
import UserItem from './UserItem';
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"



// import  "../AllStyle.css"

const AllUser = () => {
  const context = useContext(userContext);
  const { getUsers, editUser } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){

      getUsers()
    }
    else{
       navigate("/login")
    }
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)
  const [user, setUser] = useState({id: "",ename: "", eemail: "", erole: ""})


  const updateUser = (cureentUser) => {
    ref.current.click();
    setUser({id: cureentUser._id, ename: cureentUser.name, eemail: cureentUser.email, erole: cureentUser.role})
  }

  const handleClick = ()=>{
    console.log("Updating the user...", user)
    editUser(user.id,user.ename, user.eemail, user.erole);
    refClose.current.click();
    toast.success("User updated Successfully");


}

const onChange = (e)=>{
  setUser({...user,[e.target.name]: e.target.value})
}

  //To open edit modal


  return (
    <div>
      <AddUserModal />
      <div className="container" style={{marginTop:"20px"}}>
                <button type="button" ref={ref} className="btn btn-outline-warning d-none" data-bs-toggle="modal" data-bs-target="#exampleModa2">
                    Add new User
                </button>
            </div>

            {/* Modal  */}
            <div className="modal fade" id="exampleModa2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit User Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="text" name="ename" value={user.ename} placeholder="Enter name" className="form-control" id="ename" onChange={onChange} required={true} />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="eemail" value={user.eemail} placeholder="Enter Valid Email" className="form-control" id="eemail" onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                <select className="form-select" name="erole" value={user.erole} onChange={onChange} id="erole" aria-label="Default select example">
                                    <option defaultValue>select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="pulisher">publisher</option>
                                    <option value="employee">Employee</option>
                                </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" ref={refClose} className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" disabled={user.ename.length<3 ||user.erole.length===null || user.eemail.length<5} className="btn btn-warning" onClick={handleClick}>Update User</button>
                        </div>
                    </div>
                </div>
            </div>
         <UserItem key={user._id} updateUser={updateUser} user={user} />
      
    </div>
  )
}

export default AllUser;