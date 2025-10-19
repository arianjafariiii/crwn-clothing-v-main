import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Programs from './components/programs/programs';
import Title from './components/title/title';
import About from './components/about/about';
import Campus from './components/campus/campus';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contactUs/contactUs';
import Footer from './components/footer/footer';


 
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
        <Title subtitle='Contact Us' title='Get in touch' /> 
        <ContactUs/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
