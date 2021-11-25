import { createContext, useContext, useReducer, useState } from 'react';
import axios from 'axios';
import { GET_MEALS_SUCCESS, GET_MEAL_DETAILS } from './consts';
import { $api } from '../service/axios-config';
import {
  ADD_AND_DELETE_MEAL_IN_FAVORITE,
  GET_FAVORITE,
  GET_MEALS_ERROR,
  GET_MEALS_LOADING,
  GET_MEAL_ERROR,
  GET_MEAL_SUCCESS,
  SET_SEARCH_RESULTS,
} from '../utils/constants';
import { setSearchResults } from './actions/mealsActions';
import {
  mealError,
  mealLoading,
  mealSuccess,
} from './actions/mealDetailsActions';

export const mealContext = createContext();

export const useMeals = () => useContext(mealContext);

const INIT_STATE = {
  mealsLoading: false,
  moviesError: null,
  meals: [],
  mealDetails: {
    loading: false,
    error: null,
    meal: null,
  },
  mealDetailsLoading: false,
  mealDetailsError: null,
  favoriteData: JSON.parse(localStorage.getItem('favorite'))
    ? JSON.parse(localStorage.getItem('favorite')).meals.length
    : 0,
  favorite: {},
  searchResults: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_MEALS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        meals: action.payload,
      };

    case GET_MEALS_ERROR:
      return { ...state, loading: false, meals: [], error: action.payload };

    case GET_MEALS_LOADING:
      return { ...state, loading: true };

    case GET_MEAL_DETAILS:
      return { ...state, mealDetails: action.payload };
    case GET_MEAL_SUCCESS:
      return {
        ...state,
        mealDetails: {
          ...state.mealDetails,
          loading: false,
          error: null,
          meal: action.payload,
        },
      };

    case GET_MEAL_ERROR:
      return {
        ...state,
        mealDetails: {
          ...state.mealDetails,
          loading: false,
          error: action.payload,
          meal: null,
        },
      };

    case ADD_AND_DELETE_MEAL_IN_FAVORITE:
      return {
        ...state,
        favoriteData: action.payload,
      };

    case GET_FAVORITE:
      return {
        ...state,
        favorite: action.payload,
      };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };

    default:
      return state;
  }
};

const MealContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(state);
  // const [movies, setMovies] = useState([]);

  const getMeals = async () => {
    try {
      const { data } = await axios($api);
      dispatch({
        type: GET_MEALS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const getOneMeal = async (id) => {
    dispatch(mealLoading());
    try {
      const { data } = await $api(`/${id}`);
      dispatch(mealSuccess(data));
    } catch (error) {
      console.log(error.message);
      dispatch(mealError(error.message));
    }
  };

  const getMealDetails = async (id) => {
    try {
      const { data } = await axios(`${$api}/${id}`);
      dispatch({
        type: GET_MEAL_DETAILS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addMeal = (newMeal) => {
    try {
      return axios.post($api, newMeal);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editMeal = (meal) => {
    try {
      return axios.patch(`${$api}/${meal.id}`, meal);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearchMeals = async (value) => {
    try {
      if (!value) {
        dispatch(setSearchResults([]));
        return;
      }
      const { data } = await $api(`?q=${value}`);
      dispatch(setSearchResults(data));
    } catch (e) {
      console.log(e.message);
    }
  };

  const addAndDeleteMealInFavorite = (meal) => {
    let favorite = JSON.parse(localStorage.getItem('favorite'));
    if (!favorite) {
      favorite = {
        meals: [],
      };
    }
    let newMeal = {
      count: 1,
      meal: meal,
    };

    //DELETE FROM CART
    // let newCart = cart.products.filter((item) => item.product.id === product.id);
    const isItemInFavorite = checkItemInFavorite(favorite.meals, meal.id);
    if (isItemInFavorite) {
      favorite.meals = favorite.meals.filter(
        (item) => item.meal.id !== meal.id
      );
    } else {
      favorite.meals.push(newMeal);
    }
    dispatch({
      type: ADD_AND_DELETE_MEAL_IN_FAVORITE,
      payload: favorite.meals.length,
    });
  };

  const getFavorite = () => {
    let favoriteFromLS = JSON.parse(localStorage.getItem('favorite'));
    dispatch({
      type: GET_FAVORITE,
      payload: favoriteFromLS,
    });
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === 'all') {
      search.delete(query);
    } else if (Array.isArray(value)) {
      search.set('price_gte', value[0]);
      search.set('price_lte', value[1]);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  const value = {
    meals: state.meals,
    mealDetails: state.mealDetails.meal,
    loading: state.loading,
    error: state.error,
    mealDetailsLoading: state.mealDetails.loading,
    mealDetailsError: state.mealDetails.error,
    favoriteData: state.favoriteData,
    favorite: state.favorite,
    searchResults: state.searchResults,
    getMeals,
    addMeal,
    getMealDetails,
    editMeal,
    fetchByParams,
    getOneMeal,
    addAndDeleteMealInFavorite,
    getFavorite,
    fetchSearchMeals,
    dispatch,
    changeMealCount,
  };
  return <mealContext.Provider value={value}>{children}</mealContext.Provider>;
};

export default MealContext;
