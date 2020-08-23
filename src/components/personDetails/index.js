import React from "react";
import "./personDetails.css";

export default({person}) => {
    return(
        <>
            <h4>Biography</h4>
            <p>{person.biography}</p>
            <ul className="list-group list-group-horizontal">
                <li key="db" className="list-group-item list-group-item-dark">
                    Birthday
                </li>
                <li key="dob" className="list-group-item ">
                    {person.birthday}
                </li>
                <li key="pop" className="list-group-item list-group-item-dark">
                    Popularity
                </li>
                <li key="rdv" className="list-group-item ">
                    {person.popularity}
                </li>
            </ul>

        </>
    )
}

