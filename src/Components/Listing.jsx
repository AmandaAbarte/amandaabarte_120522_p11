import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Listing() {
    let {postSlug} = useParams();

    useEffect(()=> {

    }, [postSlug])
    return (
        <h1>this is a listing {postSlug}</h1>
    )
}