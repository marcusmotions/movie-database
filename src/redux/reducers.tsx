export const movieReducer = (
  state = { movies: [] as any[], favorites: [] as any[] },
  action: { type: string; json: any[]; movie: any }
) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state };
    case "MOVIES_RECEIVED":
      return { ...state, movies: action.json };
    case "ADD_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.movie] };
    case "DELETE_FAVORITES": {
      const updatedFavorites = state.favorites.filter(
        movie => movie !== action.movie
      );
      return { ...state, favorites: updatedFavorites };
    }
    default:
      return state;
  }
};
