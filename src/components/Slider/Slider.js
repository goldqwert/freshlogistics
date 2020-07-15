import React from "react";
import s from "./Slider.module.css";
import bus from "../../assets/img/bus.jpg";
import bus2 from "../../assets/img/bus2.jpg";
import bus3 from "../../assets/img/bus3.jpg";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className={s.container}>
      <Carousel
        controls={false}
        indicators={false}
        keyboard={false}
        touch={false}
        interval={3000}
        slide={true}
        className={s.carousel}
      >
        <Carousel.Item className={s.img}>
          <img className="d-block w-100" src={bus} alt="First slide" />
          <Carousel.Caption>
            <p className={s.text}>Текст</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bus2} alt="Third slide" />
          <Carousel.Caption>
            <p className={s.text}>Текст</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
