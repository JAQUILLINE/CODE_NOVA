import React from 'react'
import coachingImage from "../assets/coaching1.webp";

const Coaching = () => {
    return (
        <div className='coaching'>
            
            <h2>Unlock Your Tech Potential</h2>
            <p>Whether you're a beginner or ready to level up, our <br />
             one-on-one coaching sessions are designed to accelerate your growth. <br />
            Get hands-on guidance, expert feedback, and a personalized roadmap <br /> to reach your goals faster.</p>
            <div className="coaching-btn">
                <button type="button">Book a session</button>
            </div>
          
            <div className="coaching-image">
                <img src={coachingImage} alt="" srcset="" />
            </div>

        </div>
    )
}

export default Coaching