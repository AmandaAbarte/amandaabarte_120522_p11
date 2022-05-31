import React from "react";
import arrow from "../Assets/arrowleft.png";

export default function Gallery(props) {
  const [current, setCurrent] = React.useState(0);
  const length = props.images.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  
  return (
    <div className="gallery">
      <img
        src={arrow}
        // style={{transform: "rotate(-90deg)"}}
        className="left-arrow"
        onClick={prevSlide}
      ></img>
      <img
        src={arrow}
        style={{transform: "rotate(180deg)"}}
        className="right-arrow"
        onClick={nextSlide}
      ></img>
      {props.images.map((pic, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && (<img src={pic.key} className="image" alt={`interior of ${props.title}`}></img>)}
          </div>
        );
      })}
    </div>
  );
}
