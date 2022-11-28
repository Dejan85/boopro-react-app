import React, { Dispatch, MutableRefObject, useRef } from "react";
import { ResultsI } from "src/frontend/movies/useGetMoviesQuery";
import { useOnKeyDownHandler } from "src/utils";
import { MovieCard } from "../movie-card";
import { SliderWrapper } from "./Slider.styles";

interface Props {
  movies: ResultsI[];
  id: number;
  setActiveGrid: Dispatch<React.SetStateAction<number>>;
  activeGrid: number;
  refs: MutableRefObject<MutableRefObject<HTMLDivElement>[]>;
  setActiveCard: Dispatch<React.SetStateAction<number>>;
  activeCard: number;
  genresLength: number;
}

export const Slider: React.FC<Props> = ({
  movies,
  id,
  setActiveGrid,
  activeGrid,
  refs,
  setActiveCard,
  activeCard,
  genresLength,
}): JSX.Element => {
  const sliderRef = useRef<HTMLDivElement>(null!);
  const movieCardRef = useRef<HTMLDivElement>(null!);
  const maxNumberOfCards = useRef<number>(movies.length);

  const { focus } = useOnKeyDownHandler(
    sliderRef,
    movieCardRef,
    setActiveGrid,
    activeGrid,
    refs,
    id,
    setActiveCard,
    activeCard,
    maxNumberOfCards,
    genresLength
  );

  return (
    <SliderWrapper tabIndex={id} ref={sliderRef}>
      {movies.map((movie, index) => {
        return (
          <MovieCard
            key={index}
            id={index}
            gridId={id}
            movie={movie}
            activeCard={activeCard}
            movieCardRef={movieCardRef}
            sliderRef={sliderRef}
            activeGrid={activeGrid}
            focus={focus}
          />
        );
      })}
    </SliderWrapper>
  );
};
