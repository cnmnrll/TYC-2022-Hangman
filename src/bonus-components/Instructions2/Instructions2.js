import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Instructions2 = () => {
  return (
    <div>
      <h1>Instructions </h1>
      <p>1. The player will first be given a category, e.g. animals.
        <br/> 2. The player will then have to guess the word based on the category.
        <br/> 3. If the player guesses the word correctly, he/she wins.
        <br/> 4. If the player fails to guess the word by exceeding 10 wrong attempts, the man is hanged and he/she loses.
      </p>
      <Link to="/Game2">
        <Button>START GAME</Button>
      </Link>
    </div>
  );
};

export default Instructions2;
