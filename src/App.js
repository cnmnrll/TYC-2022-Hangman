import React from "react";
//import components from "./componenets/*"
import Header from "./components/Header";
import SetWord from "./components/SetWord";
import Gallows from "./components/Gallows";
import Stickman from "./components/Stickman";
import WrongGuess from "./components/WrongGuess";
import Main from "./components/Main";
import FailPop from "./components/FailPop";
import SuccessPop from "./components/SuccessPop";
import Notification from "./components/Notification";

export default function app() {
  return (
    <div>
      <Header />
      <SetWord />
      <div>
        <Gallows />
        <Stickman />
        <WrongGuess />
      </div>
      <Main />
      <FailPop />
      <SuccessPop />
      <Notification />
    </div>
  );
}
