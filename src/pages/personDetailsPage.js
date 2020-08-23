import React from "react";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import usePerson from "../hooks/usePerson";
import { withRouter } from "react-router-dom";

const PersonPage = props => {
    const { id } = props.match.params;
    const [person] = usePerson(id);

    return (
    <>
        {person? (
            <>
            <PageTemplate person={person} >
                <PersonDetails person={person} />    
            </PageTemplate> 
            </>
        ) : (
            <p>Waiting for person details</p>
        )}     
    </>
    );
};

export default withRouter(PersonPage);