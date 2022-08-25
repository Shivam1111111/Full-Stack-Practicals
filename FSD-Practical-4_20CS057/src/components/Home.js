import React from 'react' 
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  function navigateFunk(url){
    navigate(url);
  }
  return (
    <>
      <h2>Home Page</h2>
      <button onClick={()=>navigate('/about')}>About</button>
      <br />
      <button onClick={()=>navigateFunk('/user')}>User</button>
    </>
  )
}
