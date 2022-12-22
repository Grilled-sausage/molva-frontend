import './MovieR.css';
// import poster from './assets/poster.jfif';
import { useState } from 'react';
import StarRate from './StarRate';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";


function MovieR({title, poster_path}) {

  return (
    <>
      <div className='movieBox'>
        <img src={IMG_BASE_URL + poster_path} alt='poster'></img>
        <h3>{title}</h3>
        <StarRate />
      </div>
    </>
  );
}

export default MovieR;