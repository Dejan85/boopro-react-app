import { useQueries } from "@tanstack/react-query";
import { getMovies } from "src/api/methods";
import { genres } from "src/json/generes.json";
import { DataI, MoviesResults } from "./types";

export enum QueryKey {
  movies = "movies",
}

export const useGetMoviesQuery = (page: number) => {
  const data: MoviesResults = useQueries({
    queries: genres.map(({ id, name }: { id: number; name: string }) => {
      return {
        queryKey: [`${name}`, id, page],
        queryFn: () => getMovies(id, page),
        staleTime: Infinity,
        select: ({ data }: { data: DataI }) => {
          return {
            movies: data.results,
            page: data.page,
            totalPages: data.total_pages,
            totalResults: data.total_results,
            genres: name,
            genresLength: genres.length,
          };
        },
      };
    }),
  });

  return {
    data: data,
    totalPages: data[0].data?.totalPages,
  };
};
