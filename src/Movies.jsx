import React from 'react'

const Movies = ({movie})=> {
    // const
  return (
    <div className= 'movie'>
    <div>
        <p>{movie.Year}</p>
    </div>
    <div>
      <img src= {movie.Poster !=='N/A'? movie.Poster : 'https://via.placeholder.com/400'} alt= {movie.Title}> </img>
    </div>
    <div>
      <span>{movie.Type}</span>
      <span>{movie.Title}</span>
    </div>
  </div>
  )
}

export default Movies