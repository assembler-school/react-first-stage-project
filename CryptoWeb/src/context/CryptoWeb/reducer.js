import React, { createContext, useReducer, useContext } from "react";

export const actionTypes = {
  USER_LOGIN: "USER_LOGIN",
};

const CryptoWebContext = createContext();

const initialState = {
  users: [],
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.USER_LOGIN: {
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
}

function CryptoWebProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value= {
    state
  }

  return(
    <CryptoWebContext.Provider value={value}>
    {children}
    </CryptoWebContext.Provider>
  );
}

export {CryptoWebProvider, CryptoWebContext};
