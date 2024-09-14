import React from "react";
import { useLocation } from "react-router-dom";
import { Myroutes } from "./router/routes";
import { LoginPage, UserProvider } from "./auth";
import { Navbar } from "./ui";

export const HeroApp = () => {
  const { pathname } = useLocation();

  return (
    <UserProvider>
      {pathname != "/login" ? (
        <>
          <Navbar />
          <div className="container">
            <Myroutes />
          </div>
        </>
      ) : (
        <LoginPage />
      )}
    </UserProvider>
  );
};
