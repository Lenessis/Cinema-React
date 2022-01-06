import React from "react";
import Movie from "./Movie";
import { deleteMovieAction, updateMovieAction } from "../actions/actions";
import { Link } from "react-router-dom";
import '../stylesheets/Movies.css';
import { useDispatch } from 'react-redux'

/* 
    * This component describes lists of all avaible moviesin cinema. 
    * ---
*/

const Movies = (props) =>
{
    const dispatch = useDispatch();

    function deleteMovie(id)
    {
        dispatch(deleteMovieAction(id))
    }

    function editMovie (id, title, img, year, time, description)
    {
        dispatch(updateMovieAction(id, title, img, year, time, description))
    }

    return (
        <div>
            <Link to="/add-movie">
                <button className="btn btn-primary add-movie-btn">Add movie</button>
            </Link>
            <div className="album">           
            {props.movies.map((movie) =>{
                return(
                    <Movie 
                    key={movie.id}  
                    id = {movie.id}
                    title = {movie.title}
                    img = {movie.img}
                    productionYear = {movie.productionYear}
                    time = {movie.time}
                    description = {movie.description}
                    deleteMovie = {deleteMovie}
                    editMovie = {editMovie}
                    />
                );
            })}  
                     
            </div>
            
        </div>
        
    );
}

export default Movies;