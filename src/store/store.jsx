import { createStore, combineReducers } from 'redux';
import movieReducer from './reducer';

const rootReducer = combineReducers({
  movie: movieReducer,
});

const store = createStore(rootReducer);

export default store;
