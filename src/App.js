import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { history } from "./utils";
import { PrivateRoute } from "./PrivateRoute";
import "./App.css";

import { GlobalProvider } from "./context/GlobalContext";

import Home from "./components/pages/Home";
import MyFavMovies from "./components/pages/MyFavMovies";
import LogIn from "./components/pages/LogIn";
// import SignUp from "./components/pages/SignUp";
// import NotFound from "./components/pages/NotFound";
import MovieDetails from "./components/pages/MovieDetails";
import Header from "./components/organisms/Header";

const App = () => {
  return (
    <GlobalProvider>
      <Router history={history}>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/favorites" component={MyFavMovies} />
          <Route path="/log-in" component={LogIn} />
          <PrivateRoute path="/movie-details" component={MovieDetails} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
