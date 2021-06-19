import Header from "./header";
import { connect } from "react-redux";
import routes from "../routes";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useRoutes } from "react-router-dom";

function App({ loggedUser, userAvatar, ...props }) {
  const routing = useRoutes(routes(loggedUser));

  const theme = createMuiTheme({
    spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
  });

  useEffect(() => {
    props.dispatch(handleInitialData());
  });
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters>
        <Header loggedUser={loggedUser} userAvatar={userAvatar} />
        {routing}
      </Container>
    </ThemeProvider>
  );
}

function mapStateToProps({ loggedUser, users }) {
  return {
    loggedUser,
    userAvatar: users[loggedUser].avatarURL,
  };
}

export default connect(mapStateToProps)(App);
