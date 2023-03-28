import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favouritesList from './favouritesList';


const specialReducer = combineReducers({
    movieReducer,
    favouritesList  
})

export default specialReducer;

