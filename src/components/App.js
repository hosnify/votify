import Header from "./header";
import { connect } from "react-redux";

import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { Container } from "@material-ui/core";

function App({ ...props }) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });
  return (
    <Container disableGutters>
      <Header />
    </Container>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
