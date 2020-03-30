const GET_MOVIE = "GET_MOVIE";

interface getMovie {
  type: typeof GET_MOVIE;
  payload: string;
}

export type MoviesTypes = getMovie;
