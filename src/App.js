import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "./App.css";
import Form from "./form/";

const styles = {
  headline: {
    fontSize: "large",
    fontWeight: "lighter",
    margin: "5vh"
  }
};

const App = props => (
  <React.Fragment>
    <Typography variant="h6" className={props.classes.headline}>
      What's today's weather in your city?
    </Typography>
    <Form />
  </React.Fragment>
);

export default withStyles(styles)(App);
