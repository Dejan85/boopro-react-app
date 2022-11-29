import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { MovieModal } from "src/ui/movie-modal";
import { MoviesLayout } from "src/ui/movies-layout";
import { SpinnerLoader } from "src/ui/spinner-loader";
import { useGetMoviesQuery } from "./useGetMoviesQuery";

export const Movies: React.FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, totalPages } = useGetMoviesQuery(currentPage);

  const { toggle } = useContext(ModalContext);

  const isFetching = data.every((item) => item.fetchStatus === "idle");

  return (
    <>
      {toggle && <MovieModal />}
      {isFetching ? (
        <MoviesLayout
          data={data}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ) : (
        <SpinnerLoader />
      )}
    </>
  );
};
