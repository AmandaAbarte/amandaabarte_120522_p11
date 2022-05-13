import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import accs from "../accomodations.json";

export default function Listing() {
  //checks url for id
  let { postSlug } = useParams();
  useEffect(() => {}, [postSlug]);
  //filters acccommodation array and returns only listing matching with url id
  const filtered = accs.filter((listing) => {
    if (listing.id == postSlug) {
      return listing;
    }
  });
  const [currentListing, setCurrentListing] = React.useState(...filtered);

  const tags = currentListing.tags.map((tag) => {
    return <p>{tag}</p>;
  });
  const amenities = currentListing.amenities.map((item)=> {
      return(
          <ul>
              <li>{item}</li>
          </ul>
      )
  })
  return (
    <div className="container">
      <img src={currentListing.cover}></img>
      <div className="listing-heading">
        <h1>this should be the title{currentListing.title}</h1>
        <p>{currentListing.location}</p>
        {tags}
      </div>
      <div className="listing-info">
        <div className="host">
          <p>{currentListing.host.name}</p>
          <img src={currentListing.host.picture}></img>
        </div>
        <p> rating {currentListing.rating} / 5 </p>
      </div>
      <div className="listing-about">
        <p>Description</p>
        <p>{currentListing.description}</p>
      </div>
      <div className="listing-about">
        <p>Amenities</p>
        {amenities}
      </div>
      <h2>this is the postslug {postSlug}</h2>
    </div>
  );
}
