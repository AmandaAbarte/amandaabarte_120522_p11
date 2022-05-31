import React, { useEffect } from "react";
import Gallery from "./Gallery";
import Dropdown from "./Dropdown";
import { useParams, Navigate} from "react-router-dom";
import Error from "./Error";

export default function Listing(props) {

  let { postSlug } = useParams();
  //returns only listing matching with url id
  const currentListing = props.accs.find((listing)=> listing.id === postSlug);
  //if listing is invalid, redirect to error
  if (currentListing === undefined) {
    return <Navigate to='/error'/>
  }
 
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
   //
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
    //returns all images for listing
    const pics = currentListing.pictures.map((pic) => {
      return <img key={pic} src={pic} ></img>;
    });
    //checks url for id
    useEffect(() => {}, [postSlug]);
  return (
    
    <div className="listing-container">
        <div className="listing">
          <Gallery key={currentListing.id} images={pics} title={currentListing.title}/>
          <div className="listing-heading">
            <h1>{currentListing.title}</h1>
            <p>{currentListing.location}</p>
            <div className="tags">{tags}</div>
          </div>
          <div className="listing-info">
            <div className="host">
              <p>{currentListing.host.name}</p>
              <img src={currentListing.host.picture} alt={`Profile picture of ${currentListing.host.name}`}></img>
            </div>
            <p> rating {currentListing.rating} / 5 </p>
          </div>
        </div>
        <div className="drop-container">{allitems}</div>
      </div> 
      
  );
}
