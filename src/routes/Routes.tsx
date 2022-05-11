import React from "react";
import { Route, Routes } from "react-router-dom";
import { User } from "../pages/user/User";
import { UserShop } from "../pages/userShop/UserShop";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/users" element={<UserShop />} />
    </Routes>
  );
};

export { AppRoutes };
