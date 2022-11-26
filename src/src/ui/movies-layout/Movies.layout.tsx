import React from "react";
import { MoviesContainer, ContainerColumn, GridContainer } from "../container";
import { MovieCard } from "../movie-card";
import { P } from "../paragraph";

export const MoviesLayout: React.FC = (): JSX.Element => {
  return (
    <MoviesContainer>
      <ContainerColumn>
        <P>Comedy</P>
        <GridContainer>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </GridContainer>
      </ContainerColumn>
      <ContainerColumn>
        <P>Comedy</P>
        <GridContainer>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </GridContainer>
      </ContainerColumn>
      <ContainerColumn>
        <P>Comedy</P>
        <GridContainer>
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </GridContainer>
      </ContainerColumn>
    </MoviesContainer>
  );
};
