import { GET_QUESTIONS, ADD_QUESTION } from "../actions/questions";
import { ADD_ANSWER } from "../actions/answer";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.includes(
              action.loggedUser
            )
              ? state[action.qid][action.answer].votes
              : state[action.qid][action.answer].votes.concat([
                  action.loggedUser,
                ]),
          },
        },
      };
    default:
      return state;
  }
}
