import React, { MutableRefObject } from "react";
import { MovieCardWrapper, Title } from "./MovieCard.styles";
import thumbnail from "../../../assets/thumbnail.jpg";
import { ResultsI } from "src/frontend/movies/types";

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
  // const active = useRef(activeCard === id && focus);

  const image = backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`
    : thumbnail;

  const active = activeCard === id && focus;

  return (
    <>
      <MovieCardWrapper
        tabIndex={0}
        ref={movieCardRef}
        style={{
          border: active ? "3px solid red" : "none",
        }}
      >
        <img src={image} alt="poster" />
        {active && <Title>{movie.title}</Title>}
      </MovieCardWrapper>
    </>
  );
};
