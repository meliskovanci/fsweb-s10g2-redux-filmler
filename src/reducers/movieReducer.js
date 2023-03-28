import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from '../data.js'

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => (action.payload !== item.id))
      };
      case ADD_MOVIE:
        const addFilm =action.payload;
        addFilm ={...addFilm, id : Date.now()};

        const newFilm =[...state.movies, addFilm];
        return {
          ...state, 
          movies: newFilm
        }

    default:
      return state;
  }
}

export default reducer;