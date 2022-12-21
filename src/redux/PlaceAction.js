import axios from "axios";

export const getPlaces = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_PLACES_REQUEST" });
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    dispatch({ type: "FETCH_PLACES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_PLACES_FAILURE", error });
  }
};


// export const getMatchPlaces = () => (dispatch, getState) => {
//     dispatch({ type: "MATCH_PLACES_REQUEST", payload: text });
// }