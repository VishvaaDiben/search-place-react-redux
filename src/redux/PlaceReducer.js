const initState = {
  items: [],
  loading: false,
  error: null,
};

export const getPlaceReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PLACES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PLACES_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_PLACES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

// export const getMatchReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "MATCH_PLACES_REQUEST":
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };
