import { LoginFormI } from "src/frontend/login-form";
import { FetchWrapper } from "./axios";
import { API_ROUTES } from "./routes";

///////////////////////////////////// GET ROUTES ///////////////////////////////////////////

export const getMovies = (genre_id: number, page: number) =>
  FetchWrapper.get({
    route: API_ROUTES.movies(genre_id, page),
  });
