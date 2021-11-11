import {
    CREW_CREATE_FAIL,
    CREW_CREATE_REQUEST,
    CREW_CREATE_RESET,
    CREW_CREATE_SUCCESS,
    CREW_LIST_REQUEST,
    CREW_LIST_SUCCESS,
    CREW_LIST_FAIL,
 
  } from '../constants/crewConstants';
  
  export const crewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREW_CREATE_REQUEST:
        return { loading: true };
      case CREW_CREATE_SUCCESS:
        return { loading: false, success: true, crew: action.payload };
      case CREW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CREW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  

  export const crewListReducer = (state = { crews: [] }, action) => {
    switch (action.type) {
      case CREW_LIST_REQUEST:
        return { loading: true };
      case CREW_LIST_SUCCESS:
        return { loading: false, crews: action.payload };
      case CREW_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };



  