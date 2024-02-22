import React from 'react'
import './Project.css'
import college from '.././images/college.png'
import employee from '.././images/employee.png'
import todo from '.././images/todo.png'

function Project() {
  return (
    <div data-aos="fade-in"
     className='projects'>
     <h1  data-aos="fade-in">Projects</h1> 
   <div data-aos="fade-right" className='project-card'>
   <div className='project-description'>
   <h2>Maintaing Our College Website:</h2>
   <p>
     Maintaing Our College Website And Adding New Features.<br></br>
     Currently working as part of five members team and adding new features to the college Website using html,css,and javascript.<br></br>
 </p>
  </div>
  <img  src={college}/>
  </div>




   <div data-aos="fade-left" className='project-card2'>
   <div className='project-description2'>
   <h2>Basic Employee Management System App:</h2>
   <p>
      Built an fully working java full stack project (Employee Management System) which is used to store and manipulate the employees data of an organisation using html css javascript and backend java ,spring boot.<br></br>
      
    </p>
  </div>
  <img src={employee}/>
  </div>




  <div  data-aos="fade-right" className='project-card'>
  <div className='project-description'>
  <h2>Basic Todo Application:</h2>
  <p>
    Users can add new tasks to the list.
    Edit task details, such as the task name or description.
    Remove tasks that are no longer needed., using ReactJs
   </p>
 </div>
 <img  src={todo}/>
 </div>


  </div>
  )
}

export default Project