import { useQueries, UseQueryResult } from "@tanstack/react-query";
import { getMovies } from "src/api/methods";
import { genres } from "src/json/generes.json";

export enum QueryKey {
  movies = "movies",
}

interface DataI {
  page: number;
  results: {
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
  }[];
  //   results: Record<string, boolean | string | number[] | number>[];
  total_pages: number;
  total_results: number;
}

export const useGetMoviesQuery = (page: number) => {
  const results = useQueries({
    queries: genres.map(({ id, name }: { id: number; name: string }) => {
      return {
        queryKey: [`${name}`, id],
        queryFn: () => getMovies(id, 1),
        staleTime: Infinity,
        select: ({ data }: { data: DataI }) => {
          console.log("test", data);
        },
      };
    }),
  });

  const data = {};

  return { data };
};
