import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

function AddQuestion({ trigger, dispatch, ...rest }) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({});

  const handleChange = (e, { name, value }) => {
    setValues({ ...values, [name]: value });
  };

  const handleAdd = () => {
    console.log(values);
    dispatch(handleAddQuestion(values.optionOne, values.optionTwo));
    setOpen(false);
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>Add new Question</Modal.Header>
      <Modal.Content>
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
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Add Question"
          labelPosition="right"
          icon="checkmark"
          onClick={handleAdd}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

function mapStateToProps({ loggedUser }) {
  return {
    loggedUser,
  };
}

export default connect(mapStateToProps)(AddQuestion);
