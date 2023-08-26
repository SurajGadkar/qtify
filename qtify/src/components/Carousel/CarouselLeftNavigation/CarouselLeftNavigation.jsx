import React from "react";
import { useSwiper } from "swiper/react";

function CarouselLeftNavigation() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slidePrev();
      }}
      style={{
        position: "absolute",
        top: "40%",
        left: 0,
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <img
        style={{ height: "32px", width: "32px" }}
        src={require("../../../assets/leftArrow.png")}
      />
    </div>
  );
}

export default CarouselLeftNavigation;
