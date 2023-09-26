import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import './course.css'

function Course() {
  return (
    <div className='course-container'>
      <div className='course'>Course A</div>
      <button className='listing-button'>
        < BsThreeDotsVertical className='three-dots' /> 
      </button>
    </div>
  )
}

export default Course