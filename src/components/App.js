import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { uuid } from "uuidv4";

import {fetchMoviesFromApi} from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux'

//import MoviesApi from '../api/MoviesApi';

import Movies from './Movies';
import Header from './Header';
import EditMovie from './EditMovie';
import AddMovie from './AddMovie';
//import Showing from "./Showings";

/*
 * App component is used to read data from json database and control it (like edit, add, remove).
 * Installing packages
 * npm install uuidv4
 * npm install react-router-dom --save
*/


function App ()
{
    /* new one */
    const movies1 = useSelector(state => state.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
          try{
            dispatch(fetchMoviesFromApi())
          } catch(err){
            console.log(err)
          }
        };
        fetchData()
      }, [])

        console.log('Arek: ')
        console.log(movies1)

    /* Use State */
   /* const [ movies, setMovies] = useState([]);
    const [ showings, setShowings] = useState([]);
    const [ halls, setHalls] = useState([]);*/

    /* --- READ MOVIES FROM DB ---
     * ---------------------------
     * Getting data (catching) form db.json on url: localhost:3005/movies
     * Returns array.
    */
  /*  const retriveMovies = async () =>
    {
        const response = await MoviesApi.get("/movies");
        return response.data;
    }*/

  //  useEffect( () =>
 //   {
        /* catch data and put it to the State */
     /*   const getAllMovies = async () =>
        {
            const allMovies = await retriveMovies();
            if (allMovies) setMovies(allMovies);
        };*/

        /* Call a function */
   //     getAllMovies();

 //   }, []); 

    /* --- ADDING MOVIES TO DB --- DOESN'T WORKING YET!!!
     * ---------------------------
    */

  /*  const addMovieHandler = async (movie) =>
    {
        const request = {
            id: uuid(),
            ...movie,
        };

        const response = await MoviesApi.post("/movies", request);

        setMovies([...movies, response.data]);
    }*/

    /* --- READ SHOWINGS FROM DB ---
     * ---------------------------
    */
  /*  const retriveShowings = async () =>
    {
        const response = await MoviesApi.get("/showings");
        return response.data;
    }*/

   // useEffect( () =>
  //  {
        /* catch data and put it to the State */
  /*      const getAllShowings = async () =>
        {
            const allShowings = await retriveShowings();
            if (allShowings) setShowings(allShowings);
        };
        getAllShowings(); */

   // }, []);



 /*   const retriveHalls = async () =>
    {
        const response = await MoviesApi.get("/halls");
        return response.data;
    }*/

  //  useEffect( () =>
  //  {
        /* catch data and put it to the State */
    /*    const getAllHalls = async () =>
        {
            const allHalls = await retriveHalls();
            if (allHalls) setHalls(allHalls);
        };
        getAllHalls();

    }, []); */




    return(
        <div>
            <Router>
                <Header />
                <Routes>
                    {/* Home Page - Movies */}
                    <Route path="/" element = {<Movies  movies = {movies1} />} />

                    {/* Add Movie - EditMovie */}
                    <Route
                        path="/add-movie"
                        element ={<AddMovie/>}
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
                       // element = {<Showing showings = {showings} movies = {movies} halls = {halls}/>}
                    />
                </Routes>
                    
                
            </Router>
            
             {/* props (movies) is from State */}
        </div>
    );
    
}

export default App;