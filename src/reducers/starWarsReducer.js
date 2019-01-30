import { FETCHING_DATA, ERROR, SUCCESS } from "../actions/index";

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
      case SUCCESS: 
      return {
        ...state,
        characters: action.payload,
        fetching: false
      }
      case ERROR: 
        return {
          ...state,
          error: action.error,
          fetching: false
        }
    default:
      return state;
  }
 
};
