import React from 'react'
import './MyHeader.css'

function MyHeader({name}) {

  return (
    <div className='text-header'>
        <p>{name}</p>
    </div>
  )
}

export default MyHeader