import { useContext, useState } from "react";
import { ModalContext } from "src/context/modalContext";
import { MovieModal } from "src/ui/movie-modal";
import { MoviesLayout } from "src/ui/movies-layout";
import { useGetMoviesQuery } from "./useGetMoviesQuery";

export const Movies: React.FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, page, totalPages } = useGetMoviesQuery(currentPage);

  const { toggle } = useContext(ModalContext);

  return (
    <>
      {toggle && <MovieModal />}
      <MoviesLayout
        data={data}
        page={page}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};
