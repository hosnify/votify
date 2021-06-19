import { GET_USERS } from "../actions/users";
import { ADD_ANSWER } from "../actions/answer";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.loggedUser]: {
          ...state[action.loggedUser],
          answers: {
            ...state[action.loggedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
