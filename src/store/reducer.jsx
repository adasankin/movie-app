import { SET_MOVIES, SET_LOADING, SET_ERROR, SET_QUERY } from './action';

const initialState = {
  movies: [],
  loading: false,
  error: null,
  query: '',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
