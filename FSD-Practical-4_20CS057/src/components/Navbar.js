import {NavLink} from 'react-router-dom';


export default function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li  className="listitem"><NavLink  className="link" to="/">Home</NavLink></li>
        <br></br>
        <li className="listitem"><NavLink  className="link" to="/about">About</NavLink></li>
        <br></br>
        <li className="listitem"><NavLink  className="link" to="/user">User</NavLink> </li>
        <br></br>
        <li className="listitem"><NavLink className="link" to="/*" >Contect</NavLink> </li>
      </ul>
      

      {/* When we use <a></a> anchor tag then it will work but whole page is reloded so.... */}
    </>
  )
}
