import React from "react";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

import "./App.css";
import Form from "../form/";
import Weather from "../weather/";

const styles = {
  headline: {
    fontSize: "large",
    fontWeight: "lighter",
    margin: "10vh 0 5vh"
  }
};

const App = props => (
  <React.Fragment>
    <Typography
      variant="h6"
      className={props.classes.headline}
    >
      What's today's weather in your city?
    </Typography>
    <Form />
    {props.isFetching ? <CircularProgress /> : <Weather />}
  </React.Fragment>
);

export default withStyles(styles)(App);
