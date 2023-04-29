import React from "react";
import './Hero.css';
import hero from '../../assets/hero-image.png'
import {HiLocationMarker} from "react-icons/all";
import CountUp from "react-countup";


function Header() {
    return (
        <div className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                {/*  Parti gauche  */}
                <div className="flexColStart hero-left">

                    <div className="hero-title">
                        <h1>
                            Découvrez <br/> la propriété la plus <br/> appropriée
                        </h1>
                    </div>

                    <div className="flexColStart hero-description">
                        <span className="secondaryText">Trouvez une variété de propriétés qui vous conviennent très facilement</span>
                        <span className="secondaryText">Oubliez toutes les difficultés pour vous trouver une résidence</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="#dd5c2a" size={25}/>
                        <input type="text"/>
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8000} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                            <span className="secondaryText">Produit premium</span>
                        </div>
                        <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                            <span className="secondaryText">Produit </span>
                        </div>
                        <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28}/>
                            <span>+</span>
                        </span>
                            <span className="secondaryText">Gagnant</span>
                        </div>
                    </div>
                </div>


                {/*  Parti droit  */}
                <div className="flexCenter hero-right">
                    <div className="img-container">
                        <img src={hero} alt=""/>
                    </div>
                </div>
                {/* Stat */}
            </div>
            <div className="custom-shape-divider-bottom-1679477730">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </div>

    )
}

export default Header;
