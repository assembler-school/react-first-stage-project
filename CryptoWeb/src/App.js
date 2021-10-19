import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CryptoWebContext } from "./context/CryptoWeb/reducer";
import {Auth} from "./pages/Auth";

function App() {
  return <div className="App"></div>;

  const state = useContext(CryptoWebContext);





  
  return (
    <Router>
      <Switch>
        <Route path="/transactions">
          <Transactions />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
