import React from "react";
import { Container } from "../container";

export const MovieCard: React.FC = (): JSX.Element => {
  return (
    <Container>
      <img
        src="https://image.tmdb.org/t/p/w500//sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
        alt="poster"
      />
    </Container>
  );
};
