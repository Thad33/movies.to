import React from 'react'

const Movies = ()=> {
    // const
  return (
    <div className= 'movie'>
    <div>
        <p>{movie1.Year}</p>
    </div>
    <div>
      <img src= {movie1.Poster !=='N/A'? movie1.Poster : 'https://via.placeholder.com/400'} alt= {movie1.Title}> </img>
    </div>
    <div>
      <span>{movie1.Type}</span>
      <span>{movie1.Title}</span>
    </div>
  </div>
  )
}

export default Movies