import { FETCH_LOADING, FETCH_LOADED, FETCH_COUNT } from '../constants';

const initialState = {
    covidCount: [],
    isLoading: true
}

const covidTrack = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_LOADED: 
            return {
                ...state,
                isLoading: false
            }
        case FETCH_COUNT:
            return {
                ...state,
                covidCount: action.payload
            }
        default:
            return state;
    }
}

export default covidTrack