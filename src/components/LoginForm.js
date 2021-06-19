import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Dropdown,
} from "semantic-ui-react";
import { setLoggedUser } from "../actions/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ users, dispatch, ...rest }) => {
  const [usersOptions, setUsersOptions] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const newUsersOptions = Object.values(users).map((user) => ({
      key: user.id,
      value: user.id,
      text: user.name,
      image: { avatar: true, src: user.avatarURL },
    }));
    setUsersOptions(newUsersOptions);
  }, [users]);

  const handleChange = (e, { value }) => setValue(value);

  const handleLogin = () => {
    dispatch(setLoggedUser(value));
    navigate("/");
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Dropdown
              onChange={handleChange}
              options={usersOptions}
              placeholder="Choose your account"
              selection
              value={value}
            />
            <Button color="teal" fluid size="large" onClick={handleLogin}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>this is mock for authentication .</Message>
      </Grid.Column>
    </Grid>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(LoginForm);
