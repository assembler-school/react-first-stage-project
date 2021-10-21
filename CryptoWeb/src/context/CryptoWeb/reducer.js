import React, { createContext, useReducer } from "react";

import { signUpUser, logInUser } from "../../utils/authentication";
import logOut from "../../utils/logOut";
// import getCryptoPrices from "../../utils/getCryptoPrices";

const actionTypes = {
  USER_LOGIN: "USER_LOGIN",
  USER_SIGNUP: "USER_SIGNUP",
  USER_LOGOUT: "USER_LOGOUT",
  CRYPTO_FETCHING: "CRYPTO_FETCHING",
  CRYPTO_SUCCESS: "CRYPTO_SUCCESS",
  CRYPTO_ERROR: "CRYPTO_ERROR",
};

const CryptoWebContext = createContext();

const initialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  hasError: false,
  errorMessage: null,
};

function reducer(state, action) {
  const { user } = state;
  switch (action.type) {
    case actionTypes.USER_LOGIN: {
      const rightPassword = logInUser(action.payload);
      console.log(rightPassword);
      const local = JSON.parse(localStorage.getItem("Users"));
      const currentUser = local.find(
        (e) => e.username === action.payload.username
      );
      return {
        ...state,
        user: currentUser,
        isAuth: rightPassword ? true : false,
      };
    }
    case actionTypes.USER_SIGNUP: {
      let values = {
        ...action.payload,
        cryptos: [
          {
            id: 5,
            symbol: "PPC",
            name: "Peercoin",
            amount: 2,
            last_updated: "2021-10-20T10:56:02.000Z",
            quote: {
              USD: {
                price: 1.78104260772318,
                last_updated: "2021-10-20T10:56:02.000Z",
              },
            },
          },
          {
            id: 1,
            symbol: "BTC",
            name: "Bitcoin",
            amount: 1,
            last_updated: "2021-10-21T08:19:02.000Z",
            quote: {
              USD: {
                price: 65640.38434487107,
                last_updated: "2021-10-21T08:19:02.000Z",
              },
            },
          },
        ],
        USD: 100000,
      };

      signUpUser(values);
      return {
        ...state,
        user: values,
        isAuth: true,
      };
    }
    case actionTypes.USER_LOGOUT: {
      logOut();
      return {
        ...state,
        isAuth: false,
      };
    }
    case actionTypes.CRYPTO_FETCHING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.CRYPTO_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
      };
    }
    case actionTypes.CRYPTO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        cryptoList: [action.payload],
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
    logOut: () => dispatch({ type: actionTypes.USER_LOGOUT }),
    cryptoFetching: () => dispatch({ type: actionTypes.CRYPTO_FETCHING }),
    cryptoError: (err) =>
      dispatch({ type: actionTypes.CRYPTO_ERROR, payload: err }),
    cryptoSuccess: (res) =>
      dispatch({ type: actionTypes.CRYPTO_SUCCESS, payload: res }),
  };

  return (
    <CryptoWebContext.Provider value={value}>
      {children}
    </CryptoWebContext.Provider>
  );
}

export { CryptoWebProvider, CryptoWebContext };
