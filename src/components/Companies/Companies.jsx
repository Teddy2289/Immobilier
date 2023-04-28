import React from "react";
import pro from '../../assets/promesse_immobilier_logo_orange_ecriture_bleu@320x320.png'
import company from '../../assets/immobiliere-devreux-logo.jpg'
import company2 from '../../assets/is_company.jpg'
import company3 from '../../assets/real-estate-logo-2151181.jpg'
import './Companies.css'
function Companies() {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <img src={company} alt=""/>
                <img src={pro} alt=""/>
                <img src={company2} alt=""/>
                <img src={company3} alt=""/>
            </div>
        </section>
    );
}

export default Companies;
