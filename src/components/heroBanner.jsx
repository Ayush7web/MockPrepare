import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ImgOne from "../assets/First.jpg";
import ImgTwo from "../assets/second.jpg";
import ImgThree from "../assets/third.jpg";

import "swiper/css";
import "swiper/css/autoplay";

const heroBanner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <img src={ImgOne} alt="Images" className="banner_img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImgTwo} alt="Images" className="banner_img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImgThree} alt="Images" className="banner_img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default heroBanner;
