export const API_ROUTES = {
  ///////////////////////////////////// GET ROUTES ///////////////////////////////////////////
  movies: (genre_id: number, page: number) =>
    `${
      import.meta.env.VITE_MOVIES_API_HOST
    }/3/discover/movie?with_genres=${genre_id}&page=${page}&api_key=${
      import.meta.env.VITE_THEMOVIEDB_API_KEY
    }`,
};
