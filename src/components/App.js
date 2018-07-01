import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import Weather from "./Weather";
import { fetchWeather } from "../actions/fetchWeather";
import "../styles/App.css";

const App = props => (
  <React.Fragment>
    {props.error && <h1>{props.error}</h1>}
    <Form fetchWeather={props.fetchWeather} />
    <Weather weather={props.results} error={props.error} />
  </React.Fragment>
);

const mapStateToProps = state => ({
  results: state.results,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: event => dispatch(fetchWeather(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
