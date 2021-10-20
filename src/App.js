import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { createContext, useEffect, useReducer } from "react";
import { HomeContext } from "./context/HomeContext";
import GameDetails from "./pages/GameDetails";
import NewGame from "./pages/NewGame";

const initialState = {
  games: [],
  gameDetails: {},
  loadedGame: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return { ...state, games: [...action.payload] };
    case "LOAD_GAME":
      return { ...state, gameDetails: action.payload, loadedGame: true };
    default:
      return state;
  }
}

export const testContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const localStorageItem = JSON.parse(localStorage.getItem("games"));
    if (!localStorageItem) {
      var options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: { "sort-by": "alphabetical" },
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "23e233b049msh4485b68fa7318bdp11fd05jsn2ac4d49d92a1",
        },
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch({ type: "LOAD", payload: response.data });
      });
    } else {
      dispatch({ type: "LOAD", payload: localStorageItem });
    }
  }, []);

  useEffect(() => {
    if (state.games.length > 0) {
      localStorage.setItem("games", JSON.stringify(state.games));
    }
  }, [state.games]);

  return (
    <testContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/game/:gameId">
            <GameDetails />
          </Route>

          <Route exact path="/new-game">
            <NewGame />
          </Route>

          <Route path="/">
            <HomeContext.Provider value={{ state: state, dispatch: dispatch }}>
              <Home />
            </HomeContext.Provider>
          </Route>
        </Switch>
      </Router>
    </testContext.Provider>
  );
}

export default App;
