import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Content from '../Components/Content/Content';
import Sidebar from '../Components/Sidebar/Sidebar';
import MainLayout from '../layouts/MainLayout';

const MainPage = () => {
    return (
        // <MainLayout/>
            <Box p={5}>
                <Grid container spacing={3}>
                    {/* <Sidebar /> */}
                    <Content />
                </Grid>
            </Box>
        // {/* </MainLayout> */}
    );
};

export default MainPage;
