import { _saveQuestionAnswer } from "../utils/_DataAPI";
export const ADD_ANSWER = "ADD_ANSWER";

function addAnswer({ loggedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    loggedUser,
    qid,
    answer,
  };
}

export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { loggedUser } = getState();
    return _saveQuestionAnswer({
      loggedUser: loggedUser,
      qid,
      answer,
    }).then(() => dispatch(addAnswer({ loggedUser, qid, answer })));
  };
}
