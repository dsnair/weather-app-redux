import React from "react";
import "../styles/Form.css";

const Form = props => (
  <React.Fragment>
    <h1>What's today's weather in your city?</h1>
    <form onSubmit={props.fetchWeather}>
      <label htmlFor="city">City</label>
      <input type="text" name="city" placeholder="San Francisco" required />
      <label htmlFor="country">Country</label>
      <input type="text" name="country" placeholder="United States" required />
      <button>Find Weather</button>
    </form>
  </React.Fragment>
);

export default Form;
