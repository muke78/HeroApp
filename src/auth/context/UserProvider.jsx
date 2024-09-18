import { useReducer } from "react";
import { UserContext } from "../context/UserContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export const UserProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = (name = "") => {
    const user = { id: new Date().getTime(), name };

    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const onLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("heroesData");
    localStorage.removeItem("stateButton");
    localStorage.removeItem("stateSpinner");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return (
    <UserContext.Provider
      value={{ ...authState, login: onLogin, logout: onLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
