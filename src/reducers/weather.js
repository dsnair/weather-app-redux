const initialState = { results: {}, error: null };

// This function will copy the state depending on the action it receives
const weather = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_SUCCEEDED":
      return {
        ...state,
        results: {
          condition: action.response.weather[0].main,
          city: action.response.name,
          temperature: `${action.response.main.temp}\xB0F`,
          windspeed: `${action.response.wind.speed}mph`,
          humidity: `${action.response.main.humidity}%`
        },
        error: null
      };
    case "WEATHER_FAILED":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default weather;
