import React from 'react'
import './school.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function School() {
  let history = useHistory();
  return (
    <div className='school-container container'>
      <h1>Select School</h1>

      <div className='schools'>
        <button className='school' onClick={() => { history.push("/semester") }}>Electrical School</button>
        <button className='school' onClick={() => { history.push("/semester")}}>Mechanical School</button>
        <button className='school' onClick={() => { history.push("/semester")}}>Civil School</button>
      </div>
    </div>
  )
}

export default School