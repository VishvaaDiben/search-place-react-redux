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

export const getMatchPlaces = (text, state) => (dispatch, getState) => {
  let matches = state.getPlaceReducer.items.filter((place) => {
    const regex = new RegExp(`${text}`, "gi");
    return place.name.common.match(regex) || place.region.match(regex);
  });
  dispatch({ type: "MATCH_PLACES_REQUEST", matches: !text ? "" : matches });
};
