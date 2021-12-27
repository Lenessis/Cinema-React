import React from "react";
//import PropTypes from 'prop-types';
import '../stylesheets/form.css'

const EditMovie = () =>
{
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
            <h1>Movie</h1>
            <form>

                {/* TITLE AND LINK IMAGE INPUTS */}
                <div className="form-group col-md-4">
                    <label for="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title..." onChange={e => CheckTitle(e.target.value)}/>
                    <div className="alert" id="title-alert"></div>
                </div>

                <div className="form-group col-md-4">
                    <label for="image">Movie poster</label>
                    <input type="text" className="form-control" id="image" placeholder="Link to image..." onChange={e => CheckImage(e.target.value)}/>
                    <div className="alert" id="image-alert"></div>
                </div>

                {/* YEAR OF PRODUCTION AND DURATION INPUTS */}
                <div className="form-row col-md-4">
                    <div className="form-group col-md-5">
                        <label for="year">Year</label>
                        <input type="number" className="form-control" id="year" placeholder="Year of production..." />
                    </div>
                    <div className="form-group col-md-5">
                        <label for="duration">Duration (minutes)</label>
                        <input type="number" className="form-control" id="duration" placeholder="Duration..." onChange={e => CheckDuration(e.target.value)}/>
                        <div className="alert" id="duration-alert"></div>
                    </div>
                </div>
                
                {/* DESCRIPTION TEXTAREA */}
                <div className="form-group col-md-4">
                    <label for="description">Description</label>
                        <textarea id="description" className="form-control" />               
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}
export default EditMovie;