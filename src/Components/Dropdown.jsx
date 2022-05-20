import React from "react";
import arrow from "../Assets/arrow.png";

export default function Dropdown(props) {
  //checks whether the dropdown is set to active- if yes it is displayed and the icon is rotated
  const visible = {
    display: props.isActive ? "block" : "none",
  };
  const arrowDirection = {
    transform: props.isActive ? "rotate(0deg)" : "rotate(180deg)",
  };

  return (
    <div className="dropdown">
      <button type="button" className="collapsible" onClick={props.toggle}>
        {props.title}
        <img src={arrow} style={arrowDirection}></img>
      </button>
      <div className="content" style={visible}>
        {props.description}
      </div>
    </div>
  );
}
