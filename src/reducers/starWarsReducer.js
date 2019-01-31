import { FETCHING_DATA, FETCH_ERROR, FETCH_SUCCESS } from "../actions/index";

const initialState = {
  characters: [],
  fetching: false,
  error: '', 
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_DATA:
      return {
        ...state,
        fetching: true
      }
      case FETCH_SUCCESS: 
      return {
        ...state,
        characters: action.payload,
        fetching: false
      }
      case FETCH_ERROR: 
        return {
          ...state,
          error: action.payload,
          fetching: false
        }
    default:
      return state;
  }
 
};
