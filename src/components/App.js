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
 * App component is used to read data from json database and control it (like edit, add, remove).
 * Installing packages
 * npm install react-router-dom --save
*/


function App ()
{
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
                    />
                    <Route
                        path="/edit-movie/:id"
                        element = {<EditMovie editMovieHandler = {handleEdit} />}>
                    </Route>
                    <Route
                        path="/showings/"
                        element = {<Showing showings = {showings} movies = {movies} halls = {halls} tickets = {tickets}/>}
                    >
                        <Route path=':idMovie' element={<Showing showings = {showings} movies = {movies} halls = {halls} tickets = {tickets}/>} />
                    </Route>
                </Routes>
                    
                
            </Router>
            
             {/* props (movies) is from State */}
        </div>
    );
    
}

export default App;