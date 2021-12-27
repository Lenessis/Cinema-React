import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

import MoviesApi from '../api/MoviesApi';

import Movies from './Movies';
import Hall from './Hall';
import Ticket from './Ticket';
import EditMovie from './EditMovie';

/*
 * App component is used to read data from json database and control it (like edit, add, remove).
 */


function App ()
{
    /* Use State */
    const [ movies, setMovies] = useState([]);

    /* Getting data (catching) form db.json on url: localhost:3005/movies
       Returns array.
    */
    const retriveMovies = async () =>
    {
        const response = await MoviesApi.get("/movies");
        return response.data;
    }

    useEffect( () =>
    {
        /* catch data and put it to the State */
        const getAllMovies = async () =>
        {
            const allMovies = await retriveMovies();
            if (allMovies) setMovies(allMovies);
        };

        /* Call a function */
        getAllMovies();

    }, []);

    return(
        <div>
            <Movies  movies = {movies} /> {/* props (movies) is from State */}
        </div>
    );
    
}

export default App;