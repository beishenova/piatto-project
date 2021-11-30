import { Box, Grid } from "@material-ui/core";
import React from "react";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import MainImages from "../Components/MainPage/MainImages/MainImages";
import Sidebar from "../Components/Sidebar/Sidebar";
import MainLayout from "../layouts/MainLayout";

const MainPage = () => {
    return (
        <MainLayout>
            <Box p={5}>
                <Grid container spacing={3}>
                    <Content />
                </Grid>
                <MainImages />
                <Footer />
            </Box>
        </MainLayout>
    );
};

export default MainPage;
