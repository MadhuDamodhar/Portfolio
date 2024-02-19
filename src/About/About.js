import React from 'react'
import './About.css'
import mca from '../images/Mca.png'
import school from '../images/school.png'
import degree from '../images/degree.png'
import inter from '../images/inter.png'
import pic from '../images/intropic2.png'

function About() {
  return (
    <div className='About-container'>
     <div data-aos="fade-up" className='Description'>
     <h1>About Me<sub>Fresher 😁</sub></h1>
     <span>
     Recent Computer Science graduate and aspiring Full Stack Java Developer with a solid foundation in frontend technologies like HTML, CSS, and JavaScript, along with React.js. Eager to kick-start a career in Full Stack Development, leveraging academic knowledge in Core and Advanced Java, including JDBC, Servlets, and JSP along with Spring Boot. Excited to contribute to dynamic projects, learn from experienced professionals, and enhance skills in building robust web applications. Seeking an entry-level position to apply theoretical understanding in a practical setting, grow professionally, and make meaningful contributions to innovative development initiatives.

     </span>
     </div>
     <h1 className='eductionh1' data-aos="fade-up" >Education</h1>
     <div data-aos="fade-up" className='Education'>
     <div className='card shadow'>
     <img style={{height:'150px',width:'110px'}} src={pic}></img>
     <h2>Madhu Damodhar<br/></h2>
     <span>Currently pursing master's in  University PG college Osmania secunderabad</span>
     </div>
     <div className='card shadow'>
     <img src={mca}></img>
     <h2>Master's<br/>Master of Computer Application 
     </h2>
     <span> University PG college Osmania secunderabad<br/>
     (expected completion date 2025 ) 
     </span>
     </div>


     <div className='card shadow'>
     <img src={degree}></img>
     <h2>Degree<br/>BSC ( computer science ) CGPA: 7.13 
     </h2>
     <span>G Pulla Reddy Degree & P.G. College<br/>
     (Completion Year 2023 ) </span>
     </div>


     <div className='card shadow'>
     <img src={inter}></img>
     <h2>Intermediate<br/>Mpc(Maths Physics Chemistry) marks: 787 
     </h2>
     <span>Sri Chaitanya Junior Kalasala<br/>
     (Completion year date 2020 ) 
     </span>
     </div>


     <div className='card shadow'>
     <img src={school}></img>
     <h2>Matriculation<br/>
     S.R High School CGPA:8.5
     </h2>
     <span>
     (Completion Year 2017 ) 
     </span>
     </div>


     </div>
    </div>
  )
}

export default About