import Header from "./header";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";

import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";

function App({ ...props }) {
  const theme = createMuiTheme({
    spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
  });

  useEffect(() => {
    props.dispatch(handleInitialData());
  });
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters>
        <Header />
        <Dashboard></Dashboard>
      </Container>
    </ThemeProvider>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
