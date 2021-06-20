import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

function AddQuestionPage({ dispatch, ...props }) {
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const handleChange = (e, { name, value }) => {
    setValues({ ...values, [name]: value });
  };

  const handleAdd = () => {
    console.log(values);
    dispatch(handleAddQuestion(values.optionOne, values.optionTwo));
    navigate("/");
  };
  return (
    <Container disableGutters maxWidth={"md"} style={{ marginTop: "30px" }}>
      <Header as="h2" color="teal" textAlign="center">
        Would you Rather ?
      </Header>
      <Form className="attached fluid segment">
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Option One"
            placeholder="Option One"
            type="text"
            name="optionOne"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Option Two"
            placeholder="Option Two"
            type="text"
            name="optionTwo"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" onClick={handleAdd}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

function mapStateToProps({ loggedUser }) {
  return {
    loggedUser,
  };
}

export default connect(mapStateToProps)(AddQuestionPage);
