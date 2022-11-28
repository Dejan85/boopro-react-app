import { useQueries, UseQueryResult } from "@tanstack/react-query";
import { getMovies } from "src/api/methods";
import { genres } from "src/json/generes.json";

export enum QueryKey {
  movies = "movies",
}

export interface ResultsI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface DataI {
  page: number;
  results: ResultsI[];
  total_pages: number;
  total_results: number;
}

export type MoviesResults = UseQueryResult<{
  movies: ResultsI[];
  page: number;
  totalPages: number;
  totalResults: number;
  genres: string;
  genresLength: number;
}>[];

export const useGetMoviesQuery = (page: number) => {
  const data: MoviesResults = useQueries({
    queries: genres.map(({ id, name }: { id: number; name: string }) => {
      return {
        queryKey: [`${name}`, id],
        queryFn: () => getMovies(id, 1),
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

  return { data };
};
