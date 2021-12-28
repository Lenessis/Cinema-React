import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import '../stylesheets/Movie.css';

/* 
    * This component describes single movie: 
    * Title, Image (link), Year of production (date type), Duration , Description
*/

const Movie = props =>
{

    function ShowMovieDetails()
    {
        var x = document.getElementById(props.id)
        x.style.visibility = "visible";
        
    }

    function HideMovieDetails()
    {
        var x = document.getElementById(props.id)
        x.style.visibility = "hidden";
    }

    return(
        <div className="card" >
            {/* --- IMAGE BOX --- */}
            <div className="card-img-box">
                <img src={props.img} className="card-img-top" alt="{props.title}" />
            </div>

            {/* ----- BODY INFORMATION BOX ----- */}
            <div className="card-body">
                <h5 className="card-title">{props.title} </h5>
                <p className="card-text"> {props.description.slice(0,100)+"..."}</p>
                <button className="btn btn-primary card-button-show-details" onClick={e => ShowMovieDetails()} key={props.id}>Show details</button>
            </div>

            {/* ----- HIDDEN DETAILS BOX ----- */}
            <div className="movie-details" id={props.id}>

                <div className="movie-details-card">
            {/* --- Image block --- */}
                    <img src={props.img} className="image-details" alt="{props.title}" />

            {/* --- Text information block --- */}
                    <div className="box-details">

                        {/* --- Close button --- */}
                        <button className="close-details-button" onClick={e => HideMovieDetails()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </button>

                        {/* --- Details informations --- */}
                        <h1>{props.title} ({props.productionYear}) </h1>
                        <p> Duration: {props.time} minutes</p>
                        <p className="card-text"> {props.description}</p>

                        {/* --- Routing buttons --- */}
                        <div className="buttons">
                            <Link to="/edit-movie">
                                <button className="btn btn-primary buttons-child">Edit</button>
                            </Link>

                            <Link to="#">
                                <button className="btn btn-primary buttons-child">Delete</button>
                            </Link>
                            
                            <Link to="#">
                                <button className="btn btn-primary buttons-child">Book the ticket</button>
                            </Link>                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
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

    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    productionYear: PropTypes.number,
    time: PropTypes.number.isRequired,
    description: PropTypes.string
}

Movie.defaultProps=
{
    img: "https://icon-library.com/images/none-icon/none-icon-0.jpg",
    description: "No description"
}

export default Movie;