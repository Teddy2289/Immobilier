import {Swiper, useSwiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import data from '../../../src/utils/slider.json'
import {color} from "framer-motion";
import './Residences.css'

function Residences() {
    return (
        <section className="r-wrapper">
            <div className="r-container paddings innerWidth">
                <div className="r-head flexColStart">
                    <span className="orangeText">Meilleur choix</span>
                    <span className="primaryText">Résidence populaire</span>
                </div>
                <Swiper>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home"/>
                                    <span className="secondaryText r-price">
                                        <span style={{color: "orange"}}>$
                                        </span>
                                        <span>
                                            {card.price}
                                        </span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default Residences;
