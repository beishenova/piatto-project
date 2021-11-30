import React from "react";
import Header from "../Components/Header/Header";
import MainImages from "../Components/MainPage/MainImages/MainImages";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
           
            {children}
        </>
    );
};

export default MainLayout;
