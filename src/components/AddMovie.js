import React from "react";
import PropTypes from 'prop-types';
import '../stylesheets/form.css'

const AddMovie = ({addMovieHandler}) =>
{
    /* --- Adding Function ---*/
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

            if(!img && !description)
            {

                img = "https://icon-library.com/images/none-icon/none-icon-0.jpg"
                description = "No description"
                
            }
            if(!img)
            {
             img = "https://icon-library.com/images/none-icon/none-icon-0.jpg"
            // addMovieHandler(title,year,duration,description); 
            }

            if(!description)
               {
                description = "No description"
               // addMovieHandler(title,img,year,duration);
               }

           if(title && duration)
           {

            addMovieHandler(title,img,year,duration,description);
            document.getElementById("success-alert").innerHTML = "Movie added successfully!"
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
            <h1>Add movie</h1>
            

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

                <button type="submit" className="btn btn-primary" onClick={ e => handleSaveMovie(e)} >Add</button>
                <div className="alert success" id="success-alert"></div>
            
        </div>
    );
}

/*AddMovie.PropTypes = {

    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    productionYear: PropTypes.number,
    time: PropTypes.number.isRequired,
    description: PropTypes.string,
    addMovieHandler: PropTypes.func.isRequired
}*/

AddMovie.protoTypes =
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
    description: PropTypes.string,
    addMovieHandler: PropTypes.func.isRequired
}

AddMovie.defaultProps=
{
    img: "https://icon-library.com/images/none-icon/none-icon-0.jpg",
    description: "No description"
}

export default AddMovie;