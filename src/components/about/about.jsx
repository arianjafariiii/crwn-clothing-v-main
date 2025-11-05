import './about.css';
import play_icon from '../../assets/play-icon.png';
import about_img from '../../assets/about.png';
import React from 'react'

const About = ({setPlayState}) => {
  return (
    <div className='about' >
        <div className="about-left">
            <img src={about_img} alt='' className='about-img' />
            <img src={play_icon} alt='' className='play-icon' onClick={() => {setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing tomorrow's Leaders Today</h2>
            <p>
                At our university, we believe that leadership is not just about authority — it’s about vision, responsibility, and impact. Through innovative teaching methods and real-world learning experiences, we prepare students to think critically, act ethically, and lead confidently in a rapidly changing world.
            </p>
            <p>
                Our programs are designed to cultivate curiosity, creativity, and collaboration. Students are encouraged to explore diverse perspectives, engage in meaningful research, and develop problem-solving skills that empower them to create positive change in their communities and beyond. 
            </p>
            <p>
                We don’t just educate — we inspire transformation. With dedicated faculty, state-of-the-art facilities, and a global network of partners, we provide every student the tools and guidance they need to grow into tomorrow’s innovators, entrepreneurs, and changemakers.
            </p>

            </div>
    </div>
  )
}

export default About