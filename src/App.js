import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { useEffect, useReducer } from "react";
import { HomeContext } from "./context/HomeContext";
import GameDetails from './pages/GameDetails';

const initialState = {
  games: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return { games: [...action.payload] };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { "sort-by": "alphabetical" },
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "23e233b049msh4485b68fa7318bdp11fd05jsn2ac4d49d92a1",
      },
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      dispatch({ type: "LOAD", payload: response.data });
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/game/:gameId">
          <GameDetails />
        </Route>
        <Route path="/">
          <HomeContext.Provider value={{ state }}>
            <Home />
          </HomeContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
