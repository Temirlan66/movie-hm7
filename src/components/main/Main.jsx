import React from "react";
import  "./Main.css"
import MovieItem from "../movieitem/MovieItem";


const Main = ({movies, deleteMoiveHanler}) => {
  return (
    <ul className="movie-list">
        {movies.map((movies,index)=>{
          return <MovieItem data={movies} key={index} deleteMoiveHanler={deleteMoiveHanler}/>
        })}
    </ul>
  );
};

export default Main;
