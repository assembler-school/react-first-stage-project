import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';

const initialState = {
    posts: [],
    favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [],
    loading: true,
    error: false,
    darkMode: false,
    post: {},
};

export const GlobalContext = createContext(initialState);

const url = "https://ghibliapi.herokuapp.com/films";

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // FETCH DATA FROM API
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                dispatch({type: "FETCH_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_FAILURE"})
            })
    }, []);

    // UPDATE DATA IN LOCAL STORAGE WHENEVER AN EVENT IS TRIGGERED
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }, [state]);

    /*********** ACTION ***********/

    // Ad a movie to fav list
    const addToFavList = (post) => {
        dispatch({ type: "ADD_TO_FAV_LIST", payload: post });
    };

    // Delete a movie from fav list
    const deleteFavorite = (id) => {
        dispatch({ type: "DELETE_FAV_LIST", payload: id});
    }

    // Display more info of movie
    const displayMovieDetails = (post) => {
        dispatch({ type: "DISPLAY_MOVIE_DETAILS", payload: post })
    }

    // Switch between dark-mode and light-mood
    const switchMode = () => {
        if (state.darkMode)
            dispatch({ type: "LIGHT_MODE"})
        else
            dispatch({ type: "DARK_MODE"})
    };

    return (
        <GlobalContext.Provider
            value={{
                posts: state.posts,
                favorites: state.favorites,
                addToFavList,
                deleteFavorite,
                switchMode,
                darkMode: state.darkMode,
                displayMovieDetails,
                post: state.post,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};