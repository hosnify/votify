import { _saveQuestion } from "../utils/_DataAPI";
export const GET_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { loggedUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: loggedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}
