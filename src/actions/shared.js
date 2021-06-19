import { _getInitialData } from "../utils/_DataAPI";
import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";

export function handleInitialData() {
  return (dispatch) => {
    return _getInitialData().then(({ usersData, quetionsData }) => {
      dispatch(getUsers(usersData));
      dispatch(getQuestions(quetionsData));
    });
  };
}
