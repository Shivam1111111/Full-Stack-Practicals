import React, { useState } from 'react'

export default function App_prvState() {
    const [data,setdata] = useState();
    function change(){
        const random = Math.floor(Math.random()*10);
        setdata((previous)=>{
            console.log(previous)
            return random;
        })
    }
  return (
    <>
        <h2>{data}</h2>
        <h2>Previous value</h2>
        <button onClick={(change)}>Click</button>
    </>
  )
}
