import React, { useState, useEffect } from "react";
import "./components/App.css";
import MovieBox from "./components/MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=9dd1bd365079d50317213ba34420f753";

function App() {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery]=useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="grid">
      {movies.map((movieReq) => (
        <MovieBox key={movieReq.id} {...movieReq} />
      ))}
    </div>
  );
}
export default App;