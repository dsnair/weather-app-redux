import Form from "./Form";
import { connect } from "react-redux";
import { fetchWeather, changeLocation } from "./actions";

const mapStateToProps = state => ({
  city: state.city,
  country: state.country
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: event => dispatch(fetchWeather(event)),
  changeLocation: location => dispatch(changeLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
