import { Route, Routes } from "react-router-dom";
import { LoginPage, useUser } from "../auth";
import { ProtectedRoute } from "../hooks/ProtectedRoutes";
import {
  DCPage,
  HeroPage,
  HomePage,
  MarvelPage,
  NotFound,
  SearchPage,
} from "../heroes";

export const Myroutes = () => {
  const user = localStorage.getItem("user");

  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
          <Route path="/" element={<HomePage />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
