import React, { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
    users: [],
    isLogged: false,
};

function reducer(state, action){
    switch(action.type){
        case "ADD_USER":return {...state, users: action.payload};
        case "LOGIN" : return {...state, isLogged: true};
        case "LOGOUT": return {...state, isLogged: false};
        default: return state;
    }
}

function AuthContextProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    const AuthStates= {
        ...state,
        addUser: (user) => dispatch({type: "ADD_USER", payload: user}),
        login: () => dispatch({type: "LOGIN"}),
        logOut: () => dispatch({type: "LOGOUT"}),
    };

    return(
        <AuthContext.Provider value={AuthStates}>{children}</AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext};