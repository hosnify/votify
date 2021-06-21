import { Navigate } from "react-router-dom";
import AddQuestionPage from "./components/AddQuestionPage";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import QuestionDetails from "./components/QuestionDetails";

const routes = (user) => {
  console.log(user);
  return [
    {
      path: "/",
      element: user ? <Dashboard /> : <Login />,
    },
    {
      path: "/leaderboard",
      element: user ? <Leaderboard /> : <Login />,
    },
    {
      path: "/add",
      element: user ? <AddQuestionPage /> : <Login />,
    },

    {
      path: "/questions/:question_id",
      element: user ? <QuestionDetails /> : <Login />,
    },
    {
      path: "*",
      element: user ? <Navigate to="/"></Navigate> : <Login />,
    },
  ];
};
export default routes;
