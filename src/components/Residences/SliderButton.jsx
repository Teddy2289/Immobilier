import React from "react";
import {Swiper, useSwiper, SwiperSlide} from "swiper/react";

const SliderButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
}
export default SliderButton;
