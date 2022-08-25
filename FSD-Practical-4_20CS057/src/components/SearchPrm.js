import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchPrm() {
    const [searchParam , setSearchParam] = useSearchParams();
    console.warn(searchParam.get('age'))
    const age = searchParam.get('age');
    // console.log(searchParam.get(Name))
  return (
    <div>
        <h2>Use Of useSearchParam Hook</h2>
        <h2>Age is {age}</h2>
        <button onClick={()=>{setSearchParam({age:40})}}>click</button>
        <input type="text" onChange={(e)=>setSearchParam({text:e.target.value,age})}/>
    </div>
  )
}
