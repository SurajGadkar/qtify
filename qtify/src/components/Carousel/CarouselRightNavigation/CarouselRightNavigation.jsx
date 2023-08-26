import React from "react";
import { useSwiper } from "swiper/react";

function CarouselRightNavigation() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slideNext();
      }}
      style={{
        position: "absolute",
        top: "40%",
        right: 0,
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <img
        style={{ height: "32px", width: "32px" }}
        src={require("../../../assets/rightArrow.png")}
      />
    </div>
  );
}

export default CarouselRightNavigation;
