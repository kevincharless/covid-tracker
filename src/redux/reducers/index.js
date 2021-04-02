import { combineReducers } from 'redux';
import covidTrackReducer from './covidTrackReducer';

export default combineReducers({
    covidTrack: covidTrackReducer
})