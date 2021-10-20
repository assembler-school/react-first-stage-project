import React, { createContext, useContext, useReducer } from "react";

const GamesContext = createContext();

const initialState = {
  games: [],
  gameDetails: {},
  loadedGame: false,
  fetching: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_GAMES":
      return { ...state, games: [...action.payload] };
    case "LOADED_GAME":
      return { ...state, gameDetails: action.payload, loadedGame: true };
    case "FETCHING_DATA":
      return { ...state, fetching: true };
    case "FETCHED_DATA":
      return { ...state, fetching: false };

    default:
      return state;
  }
}

function GamesContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const gameStates = {
    ...state,
    loadAllGames: (data) => dispatch({ type: "LOAD_GAMES", payload: data }),
    loadGame: (data) => dispatch({ type: "LOADED_GAME", payload: data }),
    startFetch: () => dispatch({ type: "FETCHING_DATA" }),
    endFetch: () => dispatch({ type: "FETCHED_DATA" }),
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
