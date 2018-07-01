const API_KEY = "233f705c30c2444c805396c28b078a89";

// This function is called an "action" or an "action creator". When it is dispatched, it returns an object also called an "action".
export const fetchWeather = event => async dispatch => {
  event.preventDefault();
  const city = event.target.elements.city.value;
  const country = event.target.elements.country.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`;
  try {
    const request = await fetch(url);
    const response = await request.json();
    return dispatch({ type: "WEATHER_SUCCEEDED", response }); // This object is fed to the reducer as the action argument
  } catch (error) {
    return dispatch({
      type: "WEATHER_FAILED",
      error: "Something went wrong. Please try again."
    });
  }
};
