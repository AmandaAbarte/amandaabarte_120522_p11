import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import accs from "../accomodations.json";
import Gallery from "./Gallery";
import Dropdown from "./Dropdown";

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
  //maps over all tags for listing and displays them
  const tags = currentListing.tags.map((tag) => {
    return <p key={tag}>{tag}</p>;
  });
  //maps over all amenities for lisitng and displays them
  const amenities = currentListing.amenities.map((item) => {
    return (
      <ul key={item}>
        <li>{item}</li>
      </ul>
    );
  });

  const [dropdown, setDropdown] = React.useState([
    {
      title: "Description",
      description: `${currentListing.description}`,
      isActive: true,
    },
    { title: "Amenities", description: "", isActive: true },
  ]);
  //on click checks titles for match with the click - if match changes active state, if not remains the same
  function handleDropdown(title) {
    setDropdown((prevDropdown) => {
      return prevDropdown.map((drop) => {
        return drop.title === title
          ? { ...drop, isActive: !drop.isActive }
          : drop;
      });
    });
  }
  //maps over all dropdowns and creates individual dropdowns passing props
  const allitems = dropdown.map((item) => (
    <Dropdown
      key={item.title}
      isActive={item.isActive}
      toggle={() => handleDropdown(item.title)}
      title={item.title}
      description={item.description ? item.description : amenities}
    />
  ));


  const pics = currentListing.pictures.map((pic) => {
      return (
          <img key={pic} src={pic}></img>
      )
  })
  return (
    <div className="listing-container">
      <div className="listing">
        
        <Gallery key={currentListing.id}
        images={pics}/>
        <div className="listing-heading">
          <h1>{currentListing.title}</h1>
          <p>{currentListing.location}</p>
          <div className="tags">{tags}</div>
        </div>
        <div className="listing-info">
          <div className="host">
            <p>{currentListing.host.name}</p>
            <img src={currentListing.host.picture}></img>
          </div>
          <p> rating {currentListing.rating} / 5 </p>
        </div>
      </div>
      <div className="drop-container">{allitems}</div>
      {/* <div className="listing-about">
        <p>Description</p>
        <p>{currentListing.description}</p>
      </div>
      <div className="listing-about">
        <p>Amenities</p>
        {amenities}
      </div> */}
    </div>
  );
}
