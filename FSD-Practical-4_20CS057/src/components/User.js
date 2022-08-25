import React from 'react'
// import User2 from './User2'
import { Link, Outlet } from 'react-router-dom' 

export default function User() {
  return (
    <div> 
        <h2>This is User</h2>
        <Link to="user2/anil">Anil</Link>
        <br />
        <Link to="user2/nitin">Nitin</Link>
        <Outlet />
    </div>
    
  )
}
