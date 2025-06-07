import React from 'react'
import howItWorksImage from "../assets/hero.avif";
const About = () => {
    return (
        <div>
            {/*how it works section*/}
            <section className="about-section">
                
                    <div className="about-content">
                        <span>Who we are</span>
                        <h2>Empowering Businesses with Smart Digital Solutions</h2>
                        <p> At Digitech Solutions Company, we specialize in delivering innovative,
                            scalable, and results-driven digital services tailored for modern businesses.
                            </p>
                        <div className='about-btn'>
                            <button>Learn more</button>
                        </div>
                    </div>

                    <div className="image-section">
                        <img src={howItWorksImage} alt="digital solutions illustration" />
                    </div>
               
            </section>
        </div>
    )
}

export default About