import React from 'react'
import './edu.css';



const Education = () => {
  return (
    <section id='edu'>
      <h1 className='skillTitle'>About Education</h1><br/>
      <span className='skillDesc'>                 </span>
      <div className='skillBars'>
       

        <div className='skillBar'>
       
        <div className='skillBarText'>
          <h2>
            B.E : 
          </h2>
          <h3>
            Visvesvaraya Technological University - 2024
          </h3>
          <h4>
            <strong>College : </strong> Dayananda Sagar Academy of Technology and Management
          </h4>
          <h4>
            <strong>Branch : </strong> Computer Science Engineering
          </h4>
          <p><strong>CGPA - 8.8</strong> (till 6th Sem)</p>
        </div>
        </div>




        <div className='skillBar'>
    
        <div className='skillBarText'>
          <h2>
            II PUC :
          </h2>
          <h3>
            <strong>Board : </strong>Karnataka State PU Board - 2020
          </h3>
          <h4>
          <strong>College : </strong>Vaishnavi Chethana College
          </h4>
          <p><strong>Percentage - 93.5</strong>
</p>
        </div>
        </div>



        <div className='skillBar'>
        <div className='skillBarText'>
          <h2>
            SSLC :
          </h2>
          <h3>
            <strong>Board : </strong>KSEEB (Karnataka Secondary Education Examination Board) - 2018
          </h3>
          <h4>
          <strong>School : </strong>Navachethana High School
          </h4>
          <p><strong>Percentage - 88.32</strong>
</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Education;
