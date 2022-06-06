import React from "react";
import { Route, Routes } from "react-router-dom";
import { StarWarPage } from "../pages/star-war/star-war.page";
import { User } from "../pages/user/User";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/users" element={<StarWarPage />} />
    </Routes>
  );
};

export { AppRoutes };
