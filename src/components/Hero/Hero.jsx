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
        </div>
    )
}

export default Header;
