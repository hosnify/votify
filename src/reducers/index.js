import { combineReducers } from "redux";
import loggedUser from "./auth";
import users from "./users";
import questions from "./questions";

export default combineReducers({
  loggedUser,
  users,
  questions,
});
