import { Grid } from '@material-ui/core';
import React from 'react';
import MealCard from './MealCard';

const MealsList = ({ meals }) => {
    const favorite = JSON.parse(localStorage.getItem('favorite')) ?? false;
    return (
        <Grid container spacing={3}>
            {meals.map((meal) => (
                <Grid item xs={4} key={meal.id}>
                    <MealCard meal={meal} favorite={favorite} />
                </Grid>
            ))}
        </Grid>
    );
};

export default MealsList;