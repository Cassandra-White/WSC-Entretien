import Axios from 'axios';
import {
  CREW_CREATE_FAIL,
  CREW_CREATE_REQUEST,
  CREW_CREATE_SUCCESS,
  CREW_LIST_REQUEST,
  CREW_LIST_SUCCESS,
  CREW_LIST_FAIL,

} from '../constants/crewConstants';

export const createCrew = (crew) => async (dispatch, getState) => {
  dispatch({ type: CREW_CREATE_REQUEST, payload: crew });
  try {
    const { data } = await Axios.post('/api/crews', crew );
    dispatch({ type: CREW_CREATE_SUCCESS, payload: data.crew });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: CREW_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listCrews = () => async (dispatch, getState) => {
  dispatch({ type: CREW_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`/api/crews`);
    // console.log(data);
    dispatch({ type: CREW_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CREW_LIST_FAIL, payload: message });
  }
};

