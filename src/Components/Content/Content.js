<<<<<<< HEAD
import { Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { mealContext, useMeals } from "../../contexts/MealContext";
import MySpinner from "../../shared/MySpinner";
import MealsList from "../Meals/MealsList";
import "./Content.css";

const Content = () => {
    const { getMeals, loading, error, meals } = useMeals();

=======
import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { mealContext, useMeals} from '../../contexts/MealContext';
import MySpinner from '../../shared/MySpinner';
import MealsList from '../Meals/MealsList';
import './Content.css';

const Content = () => {
    const{ getMeals,loading, error, meals }= useMeals();

    
>>>>>>> 3a36f6e66bbfa55ff4f37430f640bf3c4f37c531
    const [page, setPage] = useState(0);

    const mealPerPage = 6;

    const location = useLocation();

    const pageCount = Math.ceil(meals.length / mealPerPage);

    const pageVisited = page * mealPerPage;

    const paginateMeals = meals.slice(pageVisited, pageVisited + mealPerPage);

    const changePage = ({ selected }) => {
        setPage(selected);
    };

    useEffect(() => {
        getMeals();
    }, [location.search]);

    return (
        <Grid item md={9}>
            {loading && <MySpinner size={50} />}
            {!loading && error && <h2>{error}</h2>}
            {!loading && meals.length > 0 && (
                <>
                    <MealsList meals={paginateMeals} />
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName="pagination"
                        previousLinkClassName="previousBtn"
                        nextLinkClassName="nextBtn"
                        activeClassName="activeBtn"
                        disabledClassName="disabledBtn"
                    />
                </>
            )}
        </Grid>
    );
};

export default Content;
