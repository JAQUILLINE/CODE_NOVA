// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Coaching from './components/Coaching';
import Testimonials from './components/Testimonials';
// import Partners from './components/partners';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Coaching />
      <Testimonials />
      {/* <Partners /> */}
    </div>
  );
}


export default App;