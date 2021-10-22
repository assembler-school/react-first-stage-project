import React, { createContext, useContext, useReducer } from "react";

const GamesContext = createContext();

const initialState = {
  games: [],
  gameDetails: {},

  fetchingGames: false,
  loadedGames: true,

  fetchingGameDetails: false,
  loadedGameDetails: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCHING_GAMES":
      return { ...state, fetchingGames: true };
    case "LOAD_GAMES":
      return {
        ...state,
        games: [...action.payload],
        loadedGames: true,
        fetchingGames: false,
      };

    case "FETCHING_GAME_DETAILS":
      return { ...state, fetchingGameDetails: true };
    case "LOAD_GAME_DETAILS":
      return {
        ...state,
        gameDetails: action.payload,
        loadedGameDetails: true,
        fetchingGameDetails: false,
      };

    case "RESET_LOADED_GAME_DETAILS":
      return { ...state, gameDetails: {}, loadedGameDetails: false };

    default:
      return state;
  }
}

function GamesContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const gameStates = {
    ...state,
    fetchingGames: () => dispatch({ type: "FETCHING_GAMES" }),
    loadAllGames: (data) => dispatch({ type: "LOAD_GAMES", payload: data }),

    fetchGameDetails: () => dispatch({ type: "FETCHING_GAME_DETAILS" }),
    loadGameDetails: (data) =>
      dispatch({ type: "LOAD_GAME_DETAILS", payload: data }),
    resetLoadedGameDetails: () =>
      dispatch({ type: "RESET_LOADED_GAME_DETAILS" }),
  };

  return (
    <GamesContext.Provider value={gameStates}>{children}</GamesContext.Provider>
  );
}

function useGames() {
  const context = useContext(GamesContext);
  return context;
}

export { GamesContextProvider, useGames };
