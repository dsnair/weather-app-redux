export const LOCATION_CHANGED = "LOCATION_CHANGED";
export const FETCH_PENDING = "FETCH_PENDING";
export const FETCH_RESOLVED = "FETCH_RESOLVED";
export const FETCH_REJECTED = "FETCH_REJECTED";

export const changeLocation = location => dispatch => {
  return dispatch({
    type: LOCATION_CHANGED,
    location
  });
};

export const fetchWeather = event => async (dispatch, getState) => {
  try {
    event.preventDefault();
    dispatch({ type: FETCH_PENDING });
    const { city, country } = getState();
    const APP_ID = "233f705c30c2444c805396c28b078a89";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APP_ID}&units=imperial`;
    const request = await fetch(url);
    const response = await request.json();
    return dispatch({ type: FETCH_RESOLVED, response });
    
  } catch (error) {
    return dispatch({
      type: FETCH_REJECTED,
      error: "Something went wrong. Please try again."
    });
  }
};
