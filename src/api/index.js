import axios from 'axios';

const picksUrl = 'http://localhose:5000/picks';


export const getPicks = (id) => axios.get(`${picksUrl}/${id}`);
export const updatePick = (id, pick) => axios.patch(`${picksUrl}/${id}`, pick);