import { useContext } from "react";
import { ModalContext } from "src/context/modalContext";
import { MovieModal } from "src/ui/movie-modal";
import { MoviesLayout } from "src/ui/movies-layout";
import { useGetMoviesQuery } from "./useGetMoviesQuery";

export const Movies: React.FC = (): JSX.Element => {
  const { data } = useGetMoviesQuery(1);
  const { toggle } = useContext(ModalContext);

  return (
    <>
      {toggle && <MovieModal />}
      <MoviesLayout data={data} />
    </>
  );
};
