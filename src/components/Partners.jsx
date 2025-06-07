import React from 'react'
import logoImage from "../assets/logo2.png"
import logoImage2 from "../assets/logo3.png"
import logoImage3 from "../assets/logo3.jpg"


const Partners = () => {
    return (
        <div className='our-partners'>
            <div className="partners-heading">
                <h2>Our Partners</h2>
            </div>
            <div className="partners-logo">
                <img src={logoImage} alt="" srcset="" />
                <img src={logoImage2} alt="" srcset="" />
                <img src={logoImage3} alt="" srcset="" />
                
            </div>
        </div>
    )
}

export default Partners