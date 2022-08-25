import React, {useState} from 'react'

export default function CRUD() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [age, setAge] = useState(0);

    function adduser(){
        console.log(name,email,password,age);
    }
  return (
    <>
        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"></input><br/>
        <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"></input><br/>
        <input type="password" name="password" value={password} onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter Password"></input><br/>
        <input type="text" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="Enter Age"></input><br/>
        <button type="submit" onClick={adduser}>Submit</button>
    </>
  )
}
