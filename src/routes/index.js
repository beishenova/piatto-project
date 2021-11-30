import React from "react";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import Meal from "../pages/Meal";
import FavoritePage from "../pages/FavoritePage";
import AuthPage from "../pages/AuthPage";
import AuthContext from "../contexts/AuthContext";
import MealContext from "../contexts/MealContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MealsDetails from "../Components/Meals/MealsDetails";

const AppRoutes = () => {
    return (
        <Router>
            <AuthContext>
                <MealContext>
                    <Routes>
                        <Route exact path="/" element={<MainPage />} />
                        <Route
                            exact
                            path="/meal/:id"
                            element={<MealsDetails />}
                        />
                        <Route
                            exact
                            path="/favorite"
                            element={<FavoritePage />}
                        />

                        <Route exact path="/register" element={<AuthPage />} />
                    </Routes>
                </MealContext>
            </AuthContext>
        </Router>
    );
};

export default AppRoutes;
