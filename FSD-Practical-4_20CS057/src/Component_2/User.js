import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {id} = useParams();
    const {name} = useParams();

  return (
    <>
        <h3>{id}</h3>
        <h3>{name}</h3>
    </>
    )
}
