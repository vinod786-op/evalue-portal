import React, { useContext } from 'react'
import userContext from '../../../context/userContext';
import { FaUserEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"


const UserItem = (props) => {
    const context = useContext(userContext);
    const {users, deleteUser } = context;
    const {updateUser } = props;

    return (
        
        <div>
            <div style={{ marginLeft: "25px" }}>
        <div>
          <table className="table table border shadow table-striped table-md table-hover table-responsive" style={{ marginLeft: '4%', marginTop: '13%', width: '160%' }}>
            <thead className="table-light">
              <tr style={{ color: 'blue', "fontSize": "18px", backgroundColor:"" }}>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email id</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button type="submit" onClick={()=> {updateUser(user)}} className="btn btn-warning mx-1">{<FaUserEdit />} Edite</button> 
                      <button type="submit" onClick={() => { deleteUser(user._id) }} className="btn btn-outline-warning mx-1">{<MdDelete />} delete</button>
                    </td>
                  </tr>
                  
                 )
               })}
            </tbody>
          </table>
        </div>
      </div>
        </div >
    )
}

export default UserItem