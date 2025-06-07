import React from 'react'

const Services = () => {
    return (
        <div className='Our-services'>
            <div className="services-full">
                <span>what we do</span>
                <h2>Our Core Services</h2>
                <p>At Digitech Solutions Company, we offer a suite of cutting-edge digital <br /> services designed to drive innovation and growth. </p>
            </div>
            <div className="services-half">
                <div className="left-section">
                    <h3>Custom Software Development</h3>
                    <p> We build tailor-made software solutions that streamline your operations, boost efficiency, and support business growth.</p>
                    <div className="left-btn">
                        <button>Consult</button>
                        </div>
                </div>
                <div className="right-section">
                    <h3>IT Consulting & Strategy</h3>
                    <p>Our experts help you align technology with business goals, guiding your digital transformation with strategic insights.
                    </p>
                    <div className="right-btn">
                        <button>Consult</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Services