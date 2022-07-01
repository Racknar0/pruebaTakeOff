import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import IMG1 from "../img/slider1.jpg";
import IMG2 from "../img/slider2.jpg";
import IMG3 from "../img/slider3.jpg";

const ImagenSlider = styled.img`
    width: 100%;
    
    `


// import required modules


const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ImagenSlider src={IMG1} alt="" /></SwiperSlide>
        <SwiperSlide><ImagenSlider src={IMG2} alt="" /></SwiperSlide>
        <SwiperSlide><ImagenSlider src={IMG3} alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider



