import { Container } from "@material-ui/core";
import LoginForm from "./LoginForm";

function Login({ navigateTo, ...props }) {
  return (
    <Container disableGutters maxWidth={"md"} style={{ marginTop: "30px" }}>
      <LoginForm />
    </Container>
  );
}

export default Login;
