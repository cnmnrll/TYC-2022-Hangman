import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Instructions2 = () => {
  return (
    <div>
      <h1>Guess the word!<br/> Every wrong letter creates a new body part.<br/> Once the hangman is completed, you lose.<br/> If you guess the correct word before the hangman is completed, you win! </h1>
      <Link to="/Game2">
        <Button>START GAME</Button>
      </Link>
    </div>
  );
};

export default Instructions2;
