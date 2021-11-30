import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainImages from "./Components/MainPage/MainImages/MainImages";
import AuthContext from "./contexts/AuthContext";
import MainLayout from "./layouts/MainLayout";
import Footer from "./Components/Footer/Footer";
import MainPage from "./pages/MainPage";
import MealContext from "./contexts/MealContext";
import AppRoutes from "./routes";

const App = () => {
    return (
        <>
            {/* <AuthContext>
        <MealContext> */}
            <AppRoutes />
            
            {/* </MealContext>
      </AuthContext> */}
        </>
    );
};

export default App;
