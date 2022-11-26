import { MoviesLayout } from "src/ui/movies-layout";
import { useGetMoviesQuery } from "./useGetMoviesQuery";

export const Movies: React.FC = (): JSX.Element => {
  const { data } = useGetMoviesQuery(1);

  return <MoviesLayout />;
};
