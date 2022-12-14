import './MovieM.css';
import starMain from '../assets/starMain.svg';
import { Link } from 'react-router-dom';
import React from 'react';


function MovieM({ title, poster_path, genres, vote_average, id }) {
  return (
    <>
      <div className='main-movie-box'>
        <Link to={`/movie-info/${id}`} state={{movieId: id}} style={{textDecoration: "none"}}>
          <img className='poster-main' src={poster_path} alt='poster'></img>
          <h3>{title}</h3>
          <h4>{genres}</h4>
          <div className='rate-info'><img className='star-image' src={starMain} style={vote_average === undefined ? {display: "none"} : {}}/>{vote_average}</div>
        </Link>
      </div>
    </>
  );
}

export default MovieM;