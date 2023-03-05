import React from 'react'
import MyHeader from '../MyHeader/MyHeader'
import './Projects.css'

function Projects() {
  return (
    <div className='projects'>
        <div className="project-margin">

            {/* past gigs header */}
            <MyHeader name="Past gigs"/>

            {/* party carousel */}

            <MyHeader name="future gigs" /> 

            {/* party carousel */}

            
        </div>    
    </div>
  )
}

export default Projects