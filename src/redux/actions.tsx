export const getMovie = (action: { payload: string }) => ({
  type: "GET_MOVIES",
  payload: action
});

export const addFavorites = (action: { movie: any }) => ({
  type: "ADD_FAVORITES",
  movie: action
});

export const deleteFavorites = (action: { movie: any }) => ({
  type: "DELETE_FAVORITES",
  movie: action
});
