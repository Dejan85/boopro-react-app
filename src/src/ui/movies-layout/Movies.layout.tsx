import React, { useRef, useState } from "react";
import { MoviesResults } from "src/frontend/movies/useGetMoviesQuery";
import { MoviesContainer, ContainerColumn } from "../container";
import { P } from "../paragraph";
import { Slider } from "../slider";

interface MoviesLayoutI {
  data: MoviesResults;
}

export const MoviesLayout: React.FC<MoviesLayoutI> = ({
  data,
}): JSX.Element => {
  const [activeGrid, setActiveGrid] = useState<number>(0);
  const [activeCard, setActiveCard] = useState<number>(0);
  const refs = useRef([]);

  return (
    <MoviesContainer>
      {data?.map(({ data }, index: number) => {
        return (
          <ContainerColumn key={index}>
            <P>{data?.genres}</P>
            {data && (
              <Slider
                genresLength={data.genresLength}
                movies={data.movies}
                id={index}
                setActiveGrid={setActiveGrid}
                activeGrid={activeGrid}
                setActiveCard={setActiveCard}
                activeCard={activeCard}
                refs={refs}
              />
            )}
          </ContainerColumn>
        );
      })}
    </MoviesContainer>
  );
};
