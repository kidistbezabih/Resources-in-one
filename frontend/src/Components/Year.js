  import React from 'react'
  import './year.css'
  import { useHistory } from 'react-router-dom';

  function Year({year, setYear}) {
    let history = useHistory();
    return (
      <div className='year-container'>
        <h1 className='select-year'>Select Year</h1>

        <div className='years'>
          <button className='nthyear'year='1' onClick={() => {
            setYear('1');
            history.push("/semester");

            // console.log(year)
          }}>
            First Year
          </button>

          <button className='nthyear' id='2' onClick={() => { 
            setYear('2');
            history.push("./school");
            }
            }>
            Second Year
          </button>

          <button className='nthyear' id='3' onClick={() => { 
            setYear('3');
            history.push("./school");
          }
            }>
            Third Year
          </button>

          <button className='nthyear' id='4' onClick={() => {
            setYear('4');
            history.push("./school");
          }
            }>
            Fourth Year
          </button>

          <button className='nthyear' id='5'onClick={() => { 
            setYear('5');
            history.push("./school");
          }
            }>
            Fifth Year
          </button>
        </div>
      </div>
    )
  }

  export default Year