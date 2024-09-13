import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { MarvelPage, DCPage, HeroPage, SearchPage } from "..";
import { HomePage } from "../pages/HomePage";
import { UserProvider } from "../../auth/context/UserProvider";

export const HeroesRoutes = () => {
  return (
    <UserProvider>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </UserProvider>
  );
};
