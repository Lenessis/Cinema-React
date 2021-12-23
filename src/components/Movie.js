import React from "react";
import PropTypes from "prop-types";
import '../stylesheets/Movie.css';

/* 
    * This component describes single movie: 
    * Title, Image (link), Year of production (date type), Duration , Description
*/

const Movie = props =>
{
    return(
        <div className="card" >
            <img src={props.img} className="card-img-top" alt="{props.title}" />
            <div className="card-body">
                <h5 className="card-title">{props.title} ({props.productionYear.getFullYear()})</h5>
                <p> Duration: {props.time} minutes</p>
                <p className="card-text"> {props.description}</p>
                <a href="#" className="btn btn-primary">Show movie details</a>
            </div>
        </div>
        /*<div>
            <h5>{props.title}</h5>
            <img src={props.img} alt={props.title} />
            <p>{props.productionYear.getFullYear()}</p>
            <p>{props.time}</p>
            <p>{props.description}</p>
        </div>*/
    );
}

Movie.protoTypes =
{
    /*id(props, propName)
    {
        if(!props[propName])
        {
            return new Error(propName + "doesn't exist")
        }
    },*/

    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    productionYear: PropTypes.instanceOf(Date),
    time: PropTypes.number.isRequired,
    description: PropTypes.string
}

Movie.defaultProps=
{
    img: "https://icon-library.com/images/none-icon/none-icon-0.jpg",
    description: "No description"
}

export default Movie;