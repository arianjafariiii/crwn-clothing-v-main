import React from 'react';
import './hero.css';
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-age curriculm is designed to empower students with the knoledge, skills, and experiments needed to exel in the dynamic fireld of education</p>
        <button className='btn'>Explore more<img src={dark_arrow} /></button>
      </div>
    </div>
  )
}

export default Hero;
