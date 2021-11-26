import React from 'react';
import MealsDetails from '../components/Meals/MealsDetails';
import MealContext from '../contexts/MealContext';
import MainLayout from '../layouts/MainLayout';

const Meal = () => {
  return (
    <MainLayout>
      <MealsDetails />
    </MainLayout>
  );
};

export default Meal;
