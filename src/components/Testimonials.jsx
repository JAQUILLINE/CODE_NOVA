import React from 'react'
import { useRef } from 'react';
import leftArrow from "../assets/leftArrow.png"
import rightArrow from "../assets/rightArrow.png"

const Testimonials = () => {
   const scrollRef = useRef(null);

const scrollLeft = () => {
  const width = scrollRef.current.offsetWidth * 0.8 + 32; // 80% + gap
  scrollRef.current.scrollBy({ left: -width, behavior: 'smooth' });
};

const scrollRight = () => {
  const width = scrollRef.current.offsetWidth * 0.8 + 32; // 80% + gap
  scrollRef.current.scrollBy({ left: width, behavior: 'smooth' });
};


    return (
        <div className='OurTestimonials'>
            <div className="testimonial-banner">
                <span>What they say</span>
                <h2>Hear from our most trusted clients.</h2>
                <p>We take pride in building lasting partnerships with businesses across industries.
                </p>
                <div className="arrows">
                    <span className="arrow-left" onClick={scrollLeft}>
                        <img src={leftArrow} alt="Previous" />
                    </span>
                    <span className="arrow-right" onClick={scrollRight}>
                        <img src={rightArrow} alt="Next" />
                    </span>
                </div>
            </div>
            <div className="testimonial-container" ref={scrollRef}>
                <div className="testimonials">
                    <p>"Working with digitech completely transformed our online presence. Their team  revamped our website and  streamlined our backend processes. "</p>
                    <span>Sarah L, Nova Health</span>
                </div>
                <div className="testimonials">
                    <p>"From concept to deployment, the experience was seamless. They listened, adapted to our needs, and delivered a solution that exceeded expectations."</p>
                    <span> James R., BrightPath Logistics</span>
                </div>
                 <div className="testimonials">
                    <p>"Working with digitech completely transformed our online presence. Their team  revamped our website and  streamlined our backend processes. "</p>
                    <span>Sarah L, Nova Health</span>
                </div>
                <div className="testimonials">
                    <p>"From concept to deployment, the experience was seamless. They listened, adapted to our needs, and delivered a solution that exceeded expectations."</p>
                    <span> James R., BrightPath Logistics</span>
                </div>


            </div>
        </div>
    )
}

export default Testimonials