import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import User from "./Component_2/User"

export default function App2() {
    const user = [
        {id:1, Name:"Shivam"},
        {id:2, Name:"Vatsal"},
        {id:3, Name:"Shivaraj"},
        {id:4, Name:"Hemil"}
    ]
  return (
    <div className="App">
        <h2>Student List</h2>
        <BrowserRouter>
                {
                    user.map((item)=>
                        <div>
                            <Link to={"/user/"+item.id+"/"+item.Name}><h3>{item.Name}</h3></Link>
                        </div>
                    )
                }
            <Routes>
                <Route path="/user/:id/:name" element={<User />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
