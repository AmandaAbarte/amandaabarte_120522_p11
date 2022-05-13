import React from "react";
import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div className="error">
            <h1>404</h1>
            <p>Oops! It looks like this page doesn't exist</p>
            <Link to="/"> Go Back to home page</Link>
        </div>
    )
}