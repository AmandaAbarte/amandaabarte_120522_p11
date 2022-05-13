import React from "react";
import arrow from "../Assets/arrow.png";

export default function Gallery(props) {
  const [current, setCurrent] = React.useState(0);
  const length = props.images.length;
  console.log(props.images);

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const arrowLeft = {
    filter: "invert(100%)",
    transform: "rotate(-90deg)",
  };
  const arrowRight = {
    filter: "invert(100%)",
    transform: "rotate(90deg)",
  };
  return (
    <div className="gallery">
      <img
        src={arrow}
        style={arrowLeft}
        className="left-arrow"
        onClick={prevSlide}
      ></img>
      <img
        src={arrow}
        style={arrowRight}
        className="right-arrow"
        onClick={nextSlide}
      ></img>
      {props.images.map((pic, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && (<img src={pic.key} className="image"></img>)}
          </div>
        );
      })}
    </div>
  );
}
