import React from 'react'
import './project.css';
import AppDes from '../../assets/app-design.png'
import UIDesign from '../../assets/ui-design.png'


const Project = () => {
  return (
    <section id='pro'>
      <h1 className='skillTitle'>Projects I did</h1><br/>
      <span className='skillDesc'>Major two project are build, one is related to web development and another one is related to android app development.</span>
      <div className='skillBars'>
        <div className='skillBar'>
        <img src={UIDesign} alt='skillBarImg' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>
              Project 1:
          </h2>
          <h3>
            Web page development (Hospital Management)
          </h3>
          <h4>
          Technology Used: HTML, CSS, Python, MySQL
          </h4>
          <p><strong>Description:</strong> Our project Hospital Management system includes registration of
patients, storing their details into the system, and booking their appointments
with doctors. Our software has the facility to give a unique id for every patient
and stores the details of every patient and the doctors automatically.
</p>
        </div>
        </div>



        <div className='skillBar'>
        <img src={AppDes} alt='skillBarImg' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>
              Project 2:
          </h2>
          <h3>
            Android App development(HealthCare Application)
          </h3>
          <h4>
          Technology Used: Java, XML, SQLite
          </h4>
          <p><strong>Description:</strong> This project showcases the development of a user-friendly
healthcare application that incorporates features such as user login,
appointment booking with doctors, lab test package booking, access to health
articles, and a view of order details.
</p>
        </div>
        </div>

        <div className='skillBar'>
        <img src={UIDesign} alt='skillBarImg' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>
              Project 3:
          </h2>
          <h3>
            Todo List project
          </h3>
          <h4>
          Technology Used: React JS, Tailwindnd CSS
          </h4>
          <p><strong>Description:</strong> It takes two text inputs as a task title and title’s description, and
after completion of that task we can delete that particular task.
</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
