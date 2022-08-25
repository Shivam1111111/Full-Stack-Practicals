import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'

export default function App3() {
    const [data, setData] = useState([]);  // [] is an empty array
    const [sr , setSr] = useState("");
    const [id , setId] = useState("");
    const [email , setEmail] = useState("");
    const [name , setName] = useState("");

    useEffect(()=>{
        getdata();
        },[])

    function deleteData(i){
        axios.delete(`https://reqres.in/api/users?page=2/${i}`)
        .then((res)=>{
            // getdata();
        })
        
    }

    function getdata(){
        // fetch("https://reqres.in/api/users?page=2")
        // .then((responce)=>{
        //     return responce.json();
        // })
        // .then((res)=>{
        //     setData(res.data)
        // })

        axios.get("https://reqres.in/api/users?page=2")
        .then((res)=>{
            setData(res.data.data);
            setId(res.data.data[0].id)
            setEmail(res.data.data[0].email)
            setName(res.data.data[0].first_name)
            // console.log(res.data.data)
        })

    }

    function updateData(i){
        // console.log(i);
        console.log(data[i]);
        setSr(data[i].sr)
        setId(data[i].id)
        setEmail(data[i].email)
        setName(data[i].first_name)

    }
    function set_Data(){
        console.log(id,email,name);
    }
  return (
    <>
        <h2>Calling API </h2>
        <table border="2">
            <thead>
                <tr>
                    <td><b>Sr No.</b></td>
                    <td><b>ID</b></td>
                    <td><b>Email</b></td>
                    <td><b>First Name</b></td>
                </tr>
            </thead>
            <tbody>
                {   
                    data.map((item,i)=>   
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td><button onClick={()=>deleteData(i)}>Delete</button></td>
                            <td><button onClick={()=>updateData(i)}>Update</button></td>
                        </tr>
                    )
                }
                {/* We can do dynamic routing as we do in App2.js */}
            </tbody>
        </table>
        <br></br>
        <br></br>
        <div>
            <input tyoe="text" placeholder="Sr No" value={sr} onChange={(e)=>{setSr(e.target.value)}}></input><br></br>
            <input tyoe="text" placeholder="Id" value={id} onChange={(e)=>{setId(e.target.value)}}></input><br></br>
            <input tyoe="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            <input tyoe="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}></input><br></br>
            <button onClick={(set_Data)}>Update Data</button>
        </div>
    </>
  )
}
