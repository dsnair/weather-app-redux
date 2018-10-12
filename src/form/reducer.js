import {
  LOCATION_CHANGED,
  FETCH_PENDING,
  FETCH_RESOLVED,
  FETCH_REJECTED
} from "./actions";

const initialState = {
  isFetching: false,
  city: "Oakland",
  country: "United States",
  response: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGED:
      return { ...state, ...action.location };

    case FETCH_PENDING:
      return { ...state, isFetching: true };

    case FETCH_RESOLVED:
      return { ...state, response: action.response, isFetching: false };

    case FETCH_REJECTED:
      return { ...state, error: action.error, isFetching: false };

    default:
      return state;
  }
};
