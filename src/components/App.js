import React, {useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {createMovieAction,  fetchMoviesFromApi, updateMovieAction, fetchShowingsFromApi, fetchHallsFromApi, fetchTicketsFromApi} from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux'

import Movies from './Movies';
import Header from './Header';
import EditMovie from './EditMovie';
import AddMovie from './AddMovie';
import Showing from "./Showings";

/*
 * App component is used to read data with actions methods.
 * There is implementation of routing
 * 
*/

function App ()
{
    // declarate const variable and fetching data
    const movies = useSelector(state => state.movies)
    const showings = useSelector(state => state.showings)
    const halls = useSelector(state => state.halls)
    const tickets = useSelector(state => state.tickets)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
          try{
            dispatch(fetchMoviesFromApi())
            dispatch(fetchShowingsFromApi())
            dispatch(fetchHallsFromApi())
            dispatch(fetchTicketsFromApi())
          } catch(err){
            console.log(err)
          }
        };
        fetchData()
      }, [])

    // Handle methods to save and edit movie

    function handleSave(title,img,year,duration,description)
    {
        dispatch(createMovieAction(title,img,year,duration,description));
    }

    function handleEdit(id, title,img,year,duration,description)
    {
        dispatch(updateMovieAction(id, title,img,year,duration,description));
    }

    return(
        <div>
            <Router>
                <Header />
                <Routes>
                    {/* Home Page - Library of movies */}
                    <Route path="/" element = {<Movies  movies = {movies} />} />

                    {/* Add Movie - Adding movie form*/}
                    <Route
                        path="/add-movie"
                        element ={<AddMovie addMovieHandler={handleSave}/>}
                    />

                    {/* Edit Movie - Editing movie form*/}
                    <Route
                        path="/edit-movie/:id"
                        element = {<EditMovie editMovieHandler = {handleEdit} />}>
                    </Route>

                    {/* Showings table - Table of all or specific showings*/}
                    <Route
                        path="/showings/"
                        element = {<Showing showings = {showings} movies = {movies} halls = {halls} tickets = {tickets}/>}
                    >
                        <Route path=':idMovie' element={<Showing showings = {showings} movies = {movies} halls = {halls} tickets = {tickets}/>} />
                    </Route>
                </Routes>
                    
                
            </Router>
        </div>
    );
    
}

export default App;