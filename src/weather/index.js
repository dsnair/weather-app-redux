import { connect } from "react-redux";
import Weather from "./Weather";

const mapStateToProps = state => ({
  response: state.response
});

export default connect(
  mapStateToProps,
  null
)(Weather);
