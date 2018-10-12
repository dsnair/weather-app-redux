import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "70vw"
  },
  input: {
    margin: 20,
    width: 200
  }
};

const Form = props => (
  <form className={props.classes.form}>
    <TextField
      required
      label="City"
      value={props.city}
      onChange={event => props.changeLocation({ city: event.target.value })}
      margin="normal"
      className={props.classes.input}
    />
    <TextField
      required
      label="Country"
      value={props.country}
      onChange={event => props.changeLocation({ country: event.target.value })}
      margin="normal"
      className={props.classes.input}
    />
    <Button onClick={props.fetchWeather} color="primary" variant="contained">
      Weather
    </Button>
  </form>
);

export default withStyles(styles)(Form);
