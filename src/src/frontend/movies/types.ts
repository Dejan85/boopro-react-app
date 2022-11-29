import { UseQueryResult } from "@tanstack/react-query";

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
