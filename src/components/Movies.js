import React from "react";
import Movie from "./Movie";
import '../stylesheets/Movies.css';

/* 
    * This component describes lists of all avaible moviesin cinema. 
    * ---
*/

var movieList = [
    
    {
        title: "Hobbit",
        img: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/86974/86527/the_hobbit_the_desolution_of_smaug__final_poster_buy_original_movie_posters_at_starstills__35272__21743.1394515789.jpg?c=2",
        productionYear: new Date("2014"),
        time: 120,
        description: "The films take place in the fictional world of Middle-earth sixty years before the beginning of The Lord of the Rings, and follow hobbit Bilbo Baggins (Martin Freeman), who is convinced by the wizard Gandalf the Grey (Ian McKellen) to accompany thirteen dwarves, led by Thorin Oakenshield (Richard Armitage), on a quest."
    },
    {
        title: "Harry Potter",
        img: "https://fwcdn.pl/fpo/05/71/30571/7529392.3.jpg",
        productionYear: new Date("2007"),
        time: 120,
        description: "The films take place in the fictional world of Middle-earth sixty years before the beginning of The Lord of the Rings, and follow hobbit Bilbo Baggins (Martin Freeman), who is convinced by the wizard Gandalf the Grey (Ian McKellen) to accompany thirteen dwarves, led by Thorin Oakenshield (Richard Armitage), on a quest."
    },
    
]

const Movies =()=>
{
    return (
        <div className="album">
            {movieList.map(movie =>{
                return(
                    <Movie 
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