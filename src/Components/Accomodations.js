import React from "react";
import accs from "../accomodations.json";

export default function Accommodations() {
  const [accommodation, setAccommodation] = React.useState(accs);

  const accommodationCards = accommodation.map((item) => {
    return (
      <div className="acc-card" key={item.id}>
        <img src={item.cover}  className="acc-cover"></img>
      </div>
    );
  });

  return (
    <main>
      <div className="accommodation-container">{accommodationCards}</div>
    </main>
  );
}
