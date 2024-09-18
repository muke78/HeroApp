import { useContext } from "react";
import { UserContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRouter = ({ children }) => {
  const { logged } = useContext(UserContext);

  return logged ? <Navigate to="/marvel" /> : children;
};
