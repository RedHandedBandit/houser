import React from 'react';

const House = function(props) {
    return (
        <div> 
        <h3> Property Name: {props.info.property_name} </h3>
        <h3> Address: {props.info.address} </h3>
        <h3> City: {props.info.city} </h3>
        <h3> State: {props.info.state} </h3>
        <h3> Zipcode: {props.info.zip} </h3>
        <h2> <button> Delete </button> </h2>
        </div>
    )
}

export default House