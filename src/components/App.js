import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { uuid } from "uuidv4";

import {createMovieAction,  fetchMoviesFromApi, updateMovieAction, fetchShowingsFromApi, fetchHallsFromApi} from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux'

//import MoviesApi from '../api/MoviesApi';

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
    /* new one */
    const movies = useSelector(state => state.movies)
    const showings = useSelector(state => state.showings)
    const halls = useSelector(state => state.halls)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
          try{
            dispatch(fetchMoviesFromApi())
            dispatch(fetchShowingsFromApi())
            dispatch(fetchHallsFromApi())
          } catch(err){
            console.log(err)
          }
        };
        fetchData()
      }, [])

console.log(movies)
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
                    {/* Home Page - Movies */}
                    <Route path="/" element = {<Movies  movies = {movies} />} />

                    {/* Add Movie - EditMovie */}
                    <Route
                        path="/add-movie"
                        element ={<AddMovie addMovieHandler={handleSave}/>}
                        /*render ={(props) => (
                            <EditMovie
                                {...props}
                                addMovieHandler = {addMovieHandler} 
                            />
                        )}*/
                    />
                    <Route
                        path="/edit-movie/:id"
                        element = {<EditMovie editMovieHandler = {handleEdit} />}>
                           {/*} <Route path='idMovie' /> */}
                    </Route>
                    <Route
                        path="/showings"
                        element = {<Showing showings = {showings} movies = {movies} halls = {halls}/>}
                    />
                </Routes>
                    
                
            </Router>
            
             {/* props (movies) is from State */}
        </div>
    );
    
}

export default App;