import React, { Profiler } from 'react'
import Year from './Components/Year'
import { useState } from 'react'
import Course from './Components/course/Course'
import Courses from './Components/course/Courses'
import Files from './Components/course/Files'
import Semesters from './Components/semester/Semesters'
import School from './Components/school/School'
import Dept from './Components/dept/Dept'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [year, setYear] = useState('0');
  const [semester, setSemester] = useState('0');
  const [school, setSchool] = useState('');
  const [dept, useDept] = useState('');
  return (
    <div>
      {/* <Year  year={year} setYear={setYear}/> */}
      <Router>
        <Switch>
          <Route exact
            path ="/"
            render={() => <Year year={year} setYear={setYear} /> } 
          />
          <Route exact path="/school" component={School} />
          <Route exact path="/semester" 
            render = {() => <Semesters 
              semester = {semester} 
              setSemester = {setSemester}
              year={year} />
            } /> 
          <Route exact path ="/courses" component= {Courses}/>
          <Route exact path ="/department" component ={Dept} />
        </Switch>
      </Router>
      {/* <Semesters /> */}
      {/* <Dept/> */}
      {/* <Course /> */}
      {/* < Courses/> */}
      {/* <Files /> */}
      {/* <School /> */}
    </div>
  )
}
export default App