import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Instructions2 = () => {
  return (
    <div>
      <h1>Guess the word by pressing on the letters of the alphabat. For every wrong letter, the hangman loses a body part. Once the hangman has no more body parts, the game ends and you lose. If you guess the correct word, you win! </h1>
      <Link to="/Game2">
        <Button>START GAME</Button>
      </Link>
    </div>
  );
};

export default Instructions2;
