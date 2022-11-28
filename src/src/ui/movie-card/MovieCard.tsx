import React, { MutableRefObject } from "react";
import { ResultsI } from "src/frontend/movies/useGetMoviesQuery";
import { MovieCardWrapper } from "./MovieCard.styles";
import thumbnail from "../../../assets/thumbnail.jpg";

interface Props {
  movie: ResultsI;
  id: number;
  activeCard: number;
  movieCardRef: MutableRefObject<HTMLDivElement>;
  activeGrid: any;
  sliderRef: any;
  gridId: number;
  focus: boolean;
}

export const MovieCard: React.FC<Props> = ({
  movie,
  id,
  activeCard,
  movieCardRef,
  focus,
}): JSX.Element => {
  const { backdrop_path } = movie || {};

  const image = backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`
    : thumbnail;

  return (
    <MovieCardWrapper
      ref={movieCardRef}
      style={{
        border: activeCard === id && focus ? "3px solid red" : "none",
      }}
    >
      <img src={image} alt="poster" />
    </MovieCardWrapper>
  );
};
