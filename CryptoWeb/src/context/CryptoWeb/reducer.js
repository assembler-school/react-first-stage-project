import React, { createContext, useReducer } from "react";

import { signUpUser, logInUser } from "../../utils/authentification";

const actionTypes = {
  USER_LOGIN: "USER_LOGIN",
  USER_SIGNUP: "USER_SIGNUP",
};

const CryptoWebContext = createContext();

const initialState = {
  user: [],
  isAuth: false,
};

function reducer(state, action) {
  const { user } = state;
  switch (action.type) {
    case actionTypes.USER_LOGIN: {
      logInUser(action.payload);
      const local = JSON.parse(localStorage.getItem("Users"));
      const currentUser = local.find(
        (e) => e.username === action.payload.username
      );
      return {
        ...state,
        user: [currentUser],
        isAuth: true,
      };
    }
    case actionTypes.USER_SIGNUP: {
      let values = { ...action.payload, cryptos: [], USD: 100, balance: 100 };
      console.log(values);
      signUpUser(values);
      return {
        ...state,
        user: { ...action.payload, cryptos: [], USD: 100, balance: 100 },
        isAuth: true,
      };
    }
    default: {
      return state;
    }
  }
}

function CryptoWebProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    ...state,
    logIn: (userData) =>
      dispatch({ type: actionTypes.USER_LOGIN, payload: userData }),
    signUp: (userData) =>
      dispatch({ type: actionTypes.USER_SIGNUP, payload: userData }),
  };

  return (
    <CryptoWebContext.Provider value={value}>
      {children}
    </CryptoWebContext.Provider>
  );
}

export { CryptoWebProvider, CryptoWebContext };
