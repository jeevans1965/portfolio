import React from 'react'
import './skill.css';
import UIDesign from '../../assets/ui-design.png'
import AppDes from '../../assets/app-design.png'


const Skill = () => {
  return (
    <section id='skills'>
      <h1 className='skillTitle'>What I do</h1><br/>
      <span className='skillDesc'>My major areas of interest include Web Development, Data Structures and Algorithms.</span>
      <div className='skillBars'>
        <div className='skillBar'>
        <img src={UIDesign} alt='skillBarImg' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>
              Full stack web developer
          </h2>
          <p></p>
        </div>
        </div>

        <div className='skillBar'>
        <img src={AppDes} alt='skillBarImg' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>
              Android App developer
          </h2>
          <p></p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
