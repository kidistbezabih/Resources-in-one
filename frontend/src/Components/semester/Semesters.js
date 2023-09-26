import React from 'react'
import './semesters.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Semesters({semester, setSemester, year}) {
  let history = useHistory();
  return (
    <div className='semesters-container'>
      <h1> Select Semester of year {year} </h1>

      <div className='semesters'>
        <a href="">
          <button className='semester' 
            semester = '1' 
            onClick={() => { setSemester('1')
            if(year > '2'){
              history.push('/department')
            }
            else{
              history.push('/courses');
            }
          }}
          >First Semester</button>
        </a>

        <a href="">
          <button className='semester' 
            semester = '2'
            onClick={() => { setSemester('2')
            if(year > '1'){
              history.push('/department');
            }
            else{
            history.push('/courses')
            }
          }
          }>Second Semester</button>
        </a>
      </div>
    </div>
  )
}

export default Semesters