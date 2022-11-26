import { useQueries, useQuery } from "@tanstack/react-query";
import { getMovies } from "src/api/methods";
import { genres } from "src/json/generes.json";

export enum QueryKey {
  movies = "movies",
}

export const useGetMoviesQuery = (page: number) => {
  const results = useQueries({
    queries: genres.map(({ id, name }: { id: number; name: string }) => {
      return {
        queryKey: [`${name}`, id],
        queryFn: () => getMovies(id, 1),
        staleTime: Infinity,
      };
    }),
  });

  console.log("test result", results);

  const data = {};

  return { data };
};
