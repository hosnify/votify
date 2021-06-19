import { Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";

const routes = (user) => {
  console.log(user);
  return [
    {
      path: "/",
      element: user ? <Dashboard /> : <Navigate to="/login" />,
    },
    {
      path: "/leaderboard",
      element: user ? <Leaderboard /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];
};
export default routes;
