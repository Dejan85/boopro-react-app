import React, { useContext, useRef } from "react";
import { ModalContext } from "../../context/ModalContext";
import {
  MovieModalContainer,
  MovieModalWrapper,
  Overview,
  Title,
  Vote,
} from "./MovieModal.styles";

export const MovieModal: React.FC = (): JSX.Element => {
  const { closeModalAction, content } = useContext(ModalContext);
  const ref = useRef(null!);

  return (
    <MovieModalWrapper
      ref={ref}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Escape") closeModalAction && closeModalAction();
      }}
    >
      {content && (
        <MovieModalContainer>
          <Title>Title: {content.title}</Title>
          <Overview>Overview: {content.overview}</Overview>
          <Vote>Vote: {content.voteAverage}</Vote>
        </MovieModalContainer>
      )}
    </MovieModalWrapper>
  );
};
