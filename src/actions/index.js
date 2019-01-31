// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_DATA = "FETCHING_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getData = () => dispatch => {
  dispatch({type: FETCHING_DATA})
  const request = axios.get(`https://swapi.co/api/people/`);
  request.then(({ data }) => {
    // console.log(data.results) 
    dispatch({
      type: FETCH_SUCCESS,
      payload: data.results
    })
    request.catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err
      });
    });
  });
};
