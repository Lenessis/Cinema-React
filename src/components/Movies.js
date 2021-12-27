import React from "react";
import Movie from "./Movie";
import '../stylesheets/Movies.css';

/* 
    * This component describes lists of all avaible moviesin cinema. 
    * ---
*/

const Movies = (props) =>
{

    return (
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
                    />
                );
            })}           
        </div>
    );
}

export default Movies;