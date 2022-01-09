import React from "react";
import {  useSelector } from "react-redux";

import PropTypes from 'prop-types';
import '../stylesheets/form.css'
import {  useParams } from "react-router-dom";

function EditMovie ({editMovieHandler})
{
    /*--- Fetching film value --- */
    const id = useParams().id; 
    console.log(useParams())    
    const movie = useSelector(state=> state.movies[id])

    /* --- Edit method --- */
    function handleSaveMovie  (e) 
    {
        e.preventDefault();
        if(
            document.getElementById("title-alert").innerHTML === "" &&
            document.getElementById("duration-alert").innerHTML === ""
        )
        {
            const title = document.getElementById("title").value;
            let img = document.getElementById("image").value;
            const year = document.getElementById("year").value;
            const duration = document.getElementById("duration").value;
            let description = document.getElementById("description").value;

            // img and description values is not necessery in database.
            if(!img && !description)
            {

                img = "https://icon-library.com/images/none-icon/none-icon-0.jpg"
                description = "No description"
                
            }
            if(!img)
            {
             img = "https://icon-library.com/images/none-icon/none-icon-0.jpg"
            }

            if(!description)
               {
                description = "No description"
               }

           if(title && duration)
           {

            editMovieHandler(id,title,img,year,duration,description);
            document.getElementById("success-alert").innerHTML = "Movie updated successfully!"
           }
        }
    }

    /* --- VALIDATION --- */

    function CheckTitle(title)
    {
        if(title === "")
        {
            document.getElementById("title-alert").innerHTML = "Title cannot be empty";
        }
        else
        {
            document.getElementById("title-alert").innerHTML = "";
        }
    }

    function CheckImage(image)
    {
        var linkformat = /\.(jpeg|jpg|gif|png)$/;
        if(image === "")
        {
            document.getElementById("image-alert").innerHTML = "";
        }
        else if(!image.match(linkformat))
        {
            document.getElementById("image-alert").innerHTML = "Paste a link to the poster here!";
        }
        else
        {
            document.getElementById("image-alert").innerHTML = "";
        }
    }

    function CheckDuration(time)
    {
        if(time == null || time <=0)
        {
            document.getElementById("duration-alert").innerHTML = "The film always having time duration!";
        }
        else if(time<30)
        {
            document.getElementById("duration-alert").innerHTML = "The film has to be longer than 30 minutes!";
        }
        else
        {
            document.getElementById("duration-alert").innerHTML = "";
        }
    }


    return(
        <div className="form-content"> 
            <h1>Edit movie</h1>
            <form>

                {/* TITLE AND LINK IMAGE INPUTS */}
                <div className="form-group col-md-4">
                    <label for="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title..." defaultValue={movie.title?movie.title:''} onChange={e => CheckTitle(e.target.value) }/>
                    <div className="alert" id="title-alert"></div>
                </div>

                <div className="form-group col-md-4">
                    <label for="image">Movie poster</label>
                    <input type="text" className="form-control" id="image" placeholder="Link to image..." defaultValue={movie.img?movie.img:''} onChange={e => CheckImage(e.target.value)}/>
                    <div className="alert" id="image-alert"></div>
                </div>

                {/* YEAR OF PRODUCTION AND DURATION INPUTS */}
                <div className="form-row col-md-4">
                    <div className="form-group col-md-5">
                        <label for="year">Year</label>
                        <input type="number" className="form-control" id="year" placeholder="Year of production..." defaultValue={movie.productionYear?movie.productionYear:''}/>
                    </div>
                    <div className="form-group col-md-5">
                        <label for="duration">Duration (minutes)</label>
                        <input type="number" className="form-control" id="duration" placeholder="Duration..." defaultValue={movie.time?movie.time:0} onChange={e => CheckDuration(e.target.value)}/>
                        <div className="alert" id="duration-alert"></div>
                    </div>
                </div>
                
                {/* DESCRIPTION TEXTAREA */}
                <div className="form-group col-md-4">
                    <label for="description">Description</label>
                        <textarea id="description" className="form-control" defaultValue={movie.description?movie.description:''} />               
                </div>

                <button type="submit" className="btn btn-primary" onClick={ e => handleSaveMovie(e)}>Save</button>
                <div className="alert success" id="success-alert"></div>
            </form>
        </div>
    );
}
EditMovie.protoTypes =
{
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    productionYear: PropTypes.number,
    time: PropTypes.number.isRequired,
    description: PropTypes.string,
    editMovieHandler: PropTypes.func.isRequired
}

export default EditMovie;