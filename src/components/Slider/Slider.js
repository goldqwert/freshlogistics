import React from "react";
import s from "./Slider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bus from "../../assets/img/bus1.jpg";
import bus2 from "../../assets/img/bus2.jpg";
import bus3 from "../../assets/img/bus3.jpg";

const Slider = () => {
  return (
    <div className={s.container}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        swipeable={false}
        autoPlay={true}
        dynamicHeight={true}
        transitionTime={400}
        infiniteLoop={true}
        className={s.carousel}
      >
        <div>
          <img src={bus} alt="bus" className={s.img} />
          <p className="legend">
            TextTextTextTextTextTextTextTextTextTextTextTextTextTextText
          </p>
        </div>
        <div>
          <img src={bus2} alt="bus" className={s.img} />
          <p className="legend">
            TextTextTextTextTextTextTextTextTextTextTextTextTextTextText
          </p>
        </div>
        <div>
          <img src={bus3} alt="bus" className={s.img} />
          <p className="legend">
            TextTextTextTextTextTextTextTextTextTextTextTextTextTextText
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
