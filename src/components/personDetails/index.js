import React from "react";
import "./personDetails.css";

export default({person}) => {
    return(
        <>
            <h4>Biography</h4>
            <p>person.biography</p>
            <ul className="list-group list-group-horizontal">
                <li key="ruh" className="list-group-item list-group-item-dark">
                    Runtime (min.)
                </li>
                <li key="rut" className="list-group-item ">
                    {movie.runtime}
                </li>
                <li key="rdh" className="list-group-item list-group-item-dark">
                    Release Date
                </li>
                <li key="rdv" className="list-group-item ">
                    {movie.release_date}
                </li>
            </ul>

        </>
    )
}

