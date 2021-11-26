import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import Meal from "../pages/Meal";
import FavoritePage from "../pages/FavoritePage";
import AuthPage from "../pages/AuthPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/meal/:id" element={<Meal />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/register" element={<AuthPage/>}/>
    </Routes>
  );
};

export default AppRoutes;