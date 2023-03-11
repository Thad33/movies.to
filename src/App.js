import Movies from './Movies'
import SearchIcon from './search.svg'
import './App.css';
import { useState, useEffect } from 'react';

const API_URL = "http://ww.omdbapi.com?apikey="
const movie1 = {
  "Title": "Amazing Spyderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}
function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title)=>{
  const response = await fetch(`${API_URL}&s=${title}`)
  const data = await response.json()

    setMovies(data.Search)

  }
  useEffect(()=>{
    searchMovies()
  },[])
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className='search'>
      <input 
        placeholder='Search for movies'
        value= {searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
      />
      <img
        src= {SearchIcon}
        alt='search'
        onClick={()=>searchMovies({searchTerm})}
      />
      </div>
      {
        movies.lenght > 0 
        ? (
          <div className='container'>
             {movies.map((movies)=>(
              <Movies movie = {movie}/>
             ))}
          </div>
        
        ) : (
          <div className='Empty'>No MoviesFound</div>
        )
      }  
      
    </div>
  );
}

export default App;
