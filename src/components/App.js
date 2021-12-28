import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { uuid } from "uuidv4";

import MoviesApi from '../api/MoviesApi';

import Movies from './Movies';
import Header from './Header';
import EditMovie from './EditMovie';
import AddMovie from './AddMovie';

import Showing from "./Showings";

/*
 * App component is used to read data from json database and control it (like edit, add, remove).
 * Installing packages
 * npm install uuidv4
 * npm install react-router-dom --save
*/


function App ()
{
    /* Use State */
    const [ movies, setMovies] = useState([]);

    /* --- READ MOVIES FROM DB ---
     * ---------------------------
     * Getting data (catching) form db.json on url: localhost:3005/movies
     * Returns array.
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

    /* --- ADDING MOVIES TO DB --- DOESN'T WORKING YET!!!
     * ---------------------------
    */

    const addMovieHandler = async (movie) =>
    {
        const request = {
            id: uuid(),
            ...movie,
        };

        const response = await MoviesApi.post("/movies", request);

        setMovies([...movies, response.data]);
    }

    return(
        <div>
            <Router>
                <Header />
                <Routes>
                    {/* Home Page - Movies */}
                    <Route path="/" element = {<Movies  movies = {movies} />} />

                    {/* Add Movie - EditMovie */}
                    <Route
                        path="/add-movie"
                        element ={<AddMovie addMovieHandler={addMovieHandler}/>}
                        /*render ={(props) => (
                            <EditMovie
                                {...props}
                                addMovieHandler = {addMovieHandler} 
                            />
                        )}*/
                    />
                    <Route
                        path="/edit-movie"
                        element = {<EditMovie />}
                    />
                    <Route
                        path="/showings"
                        element = {<Showing />}
                    />
                </Routes>
                    
                
            </Router>
            
             {/* props (movies) is from State */}
        </div>
    );
    
}

export default App;