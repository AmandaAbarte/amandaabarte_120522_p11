import React from "react";
import { Link } from "react-router-dom";
import accs from "../accomodations.json";

export default function Accommodations() {
  const [accommodation, setAccommodation] = React.useState(accs);

  const accommodationCards = accommodation.map((item) => {
    return (
      <div className="acc-card" key={item.id}>
        <Link to={`/listing/${item.id}`}>
          <img src={item.cover} className="acc-cover"></img>
          <h2 className="acc-title">{item.title}</h2>
        </Link>
      </div>
    );
  });

  return (
    <main>
      <div className="accommodation-container">{accommodationCards}</div>
    </main>
  );
}
