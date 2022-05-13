import React from "react";
import { Link } from "react-router-dom";
import accs from "../accomodations.json";

export default function Accommodations() {
  const [accommodation, setAccommodation] = React.useState(accs);

  const accommodationCards = accommodation.map((item) => {
    return (
      <Link to={`/listing/${item.id}`} key={item.id}>
        <div className="acc-card" >
          <img src={item.cover}  className="acc-cover"></img>
          <h2 className="acc-title">{item.title}</h2>
        </div>
      </Link>
    );
  });

  return (
    <main>
      <div className="accommodation-container">{accommodationCards}</div>
    </main>
  );
}