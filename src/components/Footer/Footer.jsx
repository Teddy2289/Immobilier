import React from 'react'
import './Footer.css'
import logo from '../../assets/immobilier.png'

function Footer() {
    return (
        <div className="f-wrapper">
            <div className="custom-shape-divider-top-1682789419">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                          className="shape-fill"></path>
                </svg>
            </div>
            <div className="paddings flexCenter innerWidth f-containner">
                <div className="flexColStart f-left">
                    <img src={logo} alt="" width={120}/>
                    <span className="secondaryText">
                        Our vision is to make all people <br/>
                        the best place to live for them
                    </span>
                </div>
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">Nanisana 101, Antananarivo, Madagascar</span>
                    <div className="flexCenter f-menu">
                        <span className="primaryText">About us</span>
                        <span className="primaryText">Service</span>
                        <span className="primaryText">Property</span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;