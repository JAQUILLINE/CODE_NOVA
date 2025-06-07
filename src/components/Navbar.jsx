import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">{"</>"}</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <span className="logo-text">Code Nova</span>
            <li><a href="#team">Team</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-cta">
            <a href="#contact" className="btn">Get Started</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar