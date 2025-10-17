import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Programs from './components/programs/programs';
import Title from './components/title/title';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our PROGRAM' title="What We Offer" />
        <Programs/>
      </div>
      
    </div>
  )
}

export default App
