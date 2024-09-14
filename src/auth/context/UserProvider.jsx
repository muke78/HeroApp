import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const storedUser = localStorage.getItem("user");
  useEffect(() => {
    setUser(JSON.parse(storedUser));
  }, [storedUser]);

  // console.log(user);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
