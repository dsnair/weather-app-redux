import React from "react";
import "../styles/Weather.css";

const Weather = props => (
  <section className="weather">
    {!props.error
      ? Object.keys(props.weather).map(k => (
          <p key={k}>{props.weather[k]}</p>
        ))
      : ""}
  </section>
);

export default Weather;
