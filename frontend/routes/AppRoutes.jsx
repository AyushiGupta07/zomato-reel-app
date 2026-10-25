
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserRegister from "../components/UserRegister";
import MainComponent from "../components/MainComponent";
import UserLogin from "../components/UserLogin";
import FoodPartnerRegister from "../components/FoodPartnerRegister";
import FoodPartnerLogin from "../components/FoodPartnerLogin";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />}>
          {/* Default page */}
          <Route index element={<UserRegister />} />

          {/* User routes */}
          <Route path="user/register" element={<UserRegister />} />
          <Route path="user/login" element={<UserLogin />} />

          {/* Food partner routes */}
          <Route
            path="foodPartner/register"
            element={<FoodPartnerRegister />}
          />
          <Route
            path="foodPartner/login"
            element={<FoodPartnerLogin />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
