import React, { createContext, useReducer } from "react";

import { signUpUser, logInUser } from "../../utils/authentification";
import getCryptoPrices from "../../utils/getCryptoPrices";

const actionTypes = {
  USER_LOGIN: "USER_LOGIN",
  USER_SIGNUP: "USER_SIGNUP",
};

const CryptoWebContext = createContext();

const initialState = {
  user: {},
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
        user: currentUser,
        isAuth: true,
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
        ],
        USD: 1000,
        // CryptoPrices: cryptos
        //   .map((crypto) => getCryptoPrices(crypto.id, crypto.amount))
        //   .reduce((a, b) => a + b),
        // balance: USD + CryptoValue,
      };
      console.log(
        values.cryptos.map((crypto) => {
          const { quote } = getCryptoPrices(crypto.id, crypto.amount);
          return quote.USD.price;
        })
      );
      signUpUser(values);
      return {
        ...state,
        user: values,
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
