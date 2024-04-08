import React from "react";
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className="movie-slide">
      <h3>{title}</h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
      >
        {movies.map((movie, key) => (
          <MovieCard movie={movie} key={key} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
