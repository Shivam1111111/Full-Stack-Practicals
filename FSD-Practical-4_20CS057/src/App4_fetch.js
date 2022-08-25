import React, { useState } from 'react'

export default function App4_fetch() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPass] = useState("");
const [age, setAge] = useState("");
  function adduser(){
    let data = {name,email,password,age}

    fetch("https://reqres.in/api/users?page=2",{
        method : "POST",
        headers : {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    })
    .then((responce)=>{
        return responce.json()
    })
    .then((detail)=>{
        console.log(detail);
    })
  }  
  return (
    <div className="App">
        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"></input><br/>
        <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"></input><br/>
        <input type="password" name="password" value={password} onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter Password"></input><br/>
        <input type="text" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="Enter Age"></input><br/>
        <button type="submit" onClick={adduser}>Submit</button>
    </div>
  )
}
