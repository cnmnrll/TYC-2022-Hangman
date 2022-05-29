import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Instructions1 from "./bonus-components/Instructions/Instructions1";
import Instructions2 from "./bonus-components/Instructions/Instructions2";
import Footer from "./components/Footer/Footer";
import Difficulty from "./bonus-components/Difficulty/Difficulty";
import CustomWord from "./bonus-components/CustomWord";
import NavHome from "./bonus-components/NavHome/NavHome";
import Main1 from "./components/Main/Main1";
import Main2 from "./components/Main/Main2";

export default function App() {
  return (
    <Router>
      <div>
        <div>
          <Switch>
            <Route exact path="/">
              <div className="body">
                <Header />
                <div className="content">
                  <NavHome />
                </div>
                <Footer />
              </div>
            </Route>
            <Route exact path="/input">
              <div className="body">
                <Header />
                <div className="content">
                  <CustomWord />
                </div>
                <Footer />
              </div>
            </Route>
            <Route exact path="/difficulty">
              <div className="body">
                <Header />
                <div className="content">
                  <Difficulty />
                </div>
                <Footer />
              </div>
            </Route>
            <Route exact path="/instructions-friends">
              <div className="body">
                <Header />
                <div className="content">
                  <Instructions1 />
                </div>
                <Footer />
              </div>
            </Route>
            <Route exact path="/instructions-classic">
              <div className="body">
                <Header />
                <div className="content">
                  <Instructions2 />
                </div>
                <Footer />
              </div>
            </Route>
            <Route exact path="/game-friends">
              <div className="bigger-body">
                <Header />
                <div className="content">
                  <Main1 />
                </div>
                <Footer />
              </div>
            </Route>
            <Route exact path="/game-classic">
              <div className="bigger-body">
                <Header />
                <div className="content">
                  <Main2 />
                </div>
                <Footer />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
