import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Home";
import Instructions1 from "./bonus-components/Instructions1/Instructions1";
import Instructions2 from "./bonus-components/Instructions2/Instructions2";
import Game1 from "./Game1";
import Game2 from "./Game2";
import Leaderboard from "./bonus-components/Leaderboard/Leaderboard";
import Footer from "./components/Footer/Footer";
import Difficulty from "./components/Main/Difficulty";

export default function app() {
  return (
    <Router>
      <div id="body">
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/difficulty">
              <Difficulty />
            </Route>
            <Route exact path="/Instructions1">
              <Instructions1 />
            </Route>
            <Route exact path="/Instructions2">
              <Instructions2 />
            </Route>
            <Route exact path="/game1">
              <Game1 />
            </Route>
            <Route exact path="/game2">
              <Game2 />
            </Route>
            <Route exact path="/leaderboard">
              <Leaderboard />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
