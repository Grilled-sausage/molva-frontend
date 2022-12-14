import React, { useState, useEffect, useRef } from "react";
import MovieR from "./MovieR";
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';


function MovieRBox() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState({});
  useEffect(() => {
    axios.get(`${SERVER_URL}/api/content/survey/movie`, {
      headers: {
          Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setMovies(res.data);
    })
  }, []);

  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
  }

  useDidMountEffect(() => {
    if(rating.movieRating === 0){
      axios.delete(`${SERVER_URL}/api/rating/movie`, {
        data: rating.movieId,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Content-Type": 'application/json'
        }
      }).then((res) => {})
    }
    else{
      axios.post(`${SERVER_URL}/api/rating/movie`, rating, {
        headers: {
          Authorization: localStorage.getItem("Authorization")
        }
      }).then((res) => {})
    }
  }, [rating]);

  return (
    <>
      <div
        style={{
          width: "80%",
          marginTop: "100px",
          margin: "0",
          backgroundColor: "#1d1d1d",
          display: "grid",
          marginLeft: "auto",
          marginRight: "auto",
          gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr)",
          placeItems: "center",
        }}
      >
        {movies.map((item) => {
          return (
            <MovieR
              title={item.name}
              poster_path={item.image}
              id={item.id}
              func={setRating}
            />
          );
        })}
      </div>
    </>
  )
}

export default MovieRBox;
