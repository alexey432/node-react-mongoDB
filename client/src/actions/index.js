import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
        const response = await axios.get('/api/current_user')
        dispatch({
            type: FETCH_USER,
            payload: response.data
        })
};

export const handleToken = (token) => async dispatch => {
    const response = await axios.post('/api/stripe', token)
    
    dispatch({
        type: FETCH_USER, //the same FETCH_USER cuz we need to update the number of credits the user has
        payload: response.data
    })
};
