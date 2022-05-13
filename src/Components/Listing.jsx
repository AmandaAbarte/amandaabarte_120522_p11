import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import accs from "../accomodations.json";

export default function Listing() {
    //checks url for id
    let {postSlug} = useParams();
    useEffect(()=> {

    }, [postSlug]);
    //filters acccommodation array and returns only listing matching with url id
    const filtered = accs.filter((listing) => {
        if(listing.id == postSlug){
            return listing
        }
    });
    const [currentListing, setCurrentListing] = React.useState(...filtered);

    return (
        <div>
            <h1>this should be the title{currentListing.title}</h1>
            <h2>this is the postslug {postSlug}</h2>
        </div>
    )
}