import { FETCH_LOADING, FETCH_LOADED, FETCH_COUNT } from '../constants';
import * as api from '../../axios';

export const fetchLoading = () => ({type: FETCH_LOADING});
export const fetchLoaded = () => ({type: FETCH_LOADED});

export const getCount = () => async (dispatch) => {
    dispatch(fetchLoading());
    try {
        const { data } = await api.fetchCount();
    
        dispatch({ type: FETCH_COUNT, payload: data });
        dispatch(fetchLoaded());
    } catch (error) {
        console.log(error.message);
    }
}