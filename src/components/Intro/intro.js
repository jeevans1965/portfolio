import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section>
        <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Jeevan , </span><br/>Full Stack Developer</span>
        <p className='introPara'>As a Computer Science student at DSATM, I am eager to learn and proactive. I thrive
            on working with others to build amazing software and solve technical problems. My
            major areas of interest include Web Development, Data Structures and Algorithms.
        </p>
        <Link><button className='btn'> <img src={btnImg} alt='img'/> Hire Me </button></Link>
        </div>
        <img src={bg} alt='pic' className='bg'/>
    </section>
  )
}

export default Intro;
