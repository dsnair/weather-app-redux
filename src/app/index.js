import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => ({
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  null
)(App);
