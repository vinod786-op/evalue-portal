import React, { useState } from "react";
import userContext from "./userContext";


const UserState = (props) => {

  const host = "http://localhost:5000"

  const userInitial = []
  const [users, setUser] = useState(userInitial)

  //fetch  all users...........................................................
  const getUsers =  async () => {
    const response = await fetch(`${host}/api/auth/fetchalluser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    // console.log(json)
    setUser(json)

  }



  //Add new user to the list........................................................................................
  const addUser =  async(name, email, role, password) => {

    // eslint-disable-next-line
    const response = await fetch(`${host}/api/auth/createuser`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({name, email, role, password}) // body data type must match "Content-Type" header
    });

    
    // console.log("Adding new user")
    const user = {
      "_id": "_id",
      "name": name,
      "email": email,
      "role": role,
      "password": password
    };
    setUser(users.concat(user))

  }

  //Delete users............................................................................................
  const deleteUser = async (id) => {
    //To Do api call
    const response = await fetch(`${host}/api/auth/deleteuser/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });
    // eslint-disable-next-line
    const json = await response.json();

    const newUser = users.filter((user) => { return user._id !== id });
    setUser(newUser)

  }

  //Edit user...........................................................................................
  const editUser = async (id, name, email, role) => {
    //API call
    const response = await fetch(`${host}/api/auth/updateuser/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ name, email, role}) 
    });

    const json = await response.json();
    console.log(json);

    let newUsers = JSON.parse(JSON.stringify(users))
    //logic to edit in client side
    for (let index = 0; index < newUsers.length; index++) {
      const element = newUsers[index];
      if (element._id === id) {
        newUsers[index].name = name;
        newUsers[index].email = email;
        newUsers[index].role = role;
        break;
      } 
    }
    setUser(newUsers);
  }

  return (
    <userContext.Provider value={{ users, addUser, deleteUser, editUser, getUsers }}>
      {props.children}
    </userContext.Provider>
  )
}


export default UserState;