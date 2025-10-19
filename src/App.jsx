import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Programs from './components/programs/programs';
import Title from './components/title/title';
import About from './components/about/about';
import Campus from './components/campus/campus';
import Testimonials from './components/testimonials/testimonials';

 
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our PROGRAM' title="What We Offer" />
        <Programs/>
        <About/>
        <Title subtitle='Gallery' title='Campus Photos' /> 
        <Campus/>
        <Title subtitle='testimonials' title='What studebts says' /> 
        <Testimonials/>
      </div>
      
    </div>
  )
}

export default App
