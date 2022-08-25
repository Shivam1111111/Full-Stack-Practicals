import React from 'react'
import { useParams } from 'react-router-dom'

export default function User2() {
const param = useParams();  // it is a hook and can also say a function
const {name} = param;
  return (
    <div>
        <h2>This Is {name}'s Page</h2>
    </div>
  )
}
