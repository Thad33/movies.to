import Movies from './Movies'
import SearchIcon from './search.svg'
import './App.css';
import { useEffect } from 'react';

const API_URL = "http://ww.omdbapi.com?apikey="
const movie1 = {
  "Title": "Amazing Spyderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}
function App({movie1}) {
  const [movies, setMovies] = useState([])
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
        value= 'Superman'
        onChange={()=>{}}
      />
      <img
        src= {SearchIcon}
        alt='search'
        onClick={()=>{}}
      />
      <div className='container'>
      <Movies movie1={movie1}/>
      </div>
      </div>
     
    </div>
  );
}

export default App;
