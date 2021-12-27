import React from "react";
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
        
        //var x =  document.getElementsByClassName("movie-details")
        var x = document.getElementById(props.id)
        console.log(x)
        const y = x.style.visibility;
        console.log(y)
        x.style.visibility = "visible";
        
    }

    function HideMovieDetails()
    {
        var x = document.getElementById(props.id)
        x.style.visibility = "hidden";
    }


    //napisać funkcje która wyświetli okno, które pokaże detale odnośnie filmu
    return(
        <div className="card" >
            <img src={props.img} className="card-img-top" alt="{props.title}" />
            <div className="card-body">
                <h5 className="card-title">{props.title} {/*{props.productionYear} */}</h5>
                {/*<p> Duration: {props.time} minutes</p>*/}
                <p className="card-text"> {props.description.slice(0,100)+"..."}</p>
                <button className="btn btn-primary" onClick={e => ShowMovieDetails()} key={props.id}>Show details</button>
            </div>

            {/* --- Hidden box --- */}
            <div className="movie-details" id={props.id}>
                <div className="movie-details-card">
                    <img src={props.img} className="image-details" alt="{props.title}" />
                    <div className="box-details">
                        <button className="close-details-button" onClick={e => HideMovieDetails()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </button>
                        <h1>{props.title} ({props.productionYear}) </h1>
                        <p> Duration: {props.time} minutes</p>
                        <p className="card-text"> {props.description}</p>
                        {/* buttony do edycji i do rezerwacji */}
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

    id: PropTypes.number.isRequired,
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