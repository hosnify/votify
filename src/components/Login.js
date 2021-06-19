import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { Container } from "@material-ui/core";
import LoginForm from "./LoginForm";

function Login({ ...props }) {
  return (
    <Container disableGutters maxWidth={"md"} style={{ marginTop: "30px" }}>
      <LoginForm />
    </Container>
  );
}

export default Login;
