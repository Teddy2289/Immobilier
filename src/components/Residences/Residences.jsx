import {Swiper, useSwiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import data from '../../../src/utils/slider.json'

function Residences() {
    return (
        <section className="r-wrapper">
            <div className="r-container paddings innerWidth">
                <div className="r-head flexColStart">
                    <span className="orangeText">Meilleur choix</span>
                    <span className="primaryText">Résidence populaire</span>
                </div>
            </div>
        </section>
    );
}

export default Residences;
