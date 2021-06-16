import { _getInitialData } from "../utils/_DataAPI";
import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";
import { setLoggedUser } from "../actions/auth";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return _getInitialData().then(({ usersData, quetionsData }) => {
      dispatch(getUsers(usersData));
      dispatch(getQuestions(quetionsData));
      dispatch(setLoggedUser(AUTHED_ID));
    });
  };
}
