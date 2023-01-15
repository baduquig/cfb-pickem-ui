import * as api from '../api';

export const fetchPicks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAll();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePick = (id, pick) => async (dispatch) => {
    try {
        const { data } = await api.updatePick(id, pick);
        dispatch({ type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}