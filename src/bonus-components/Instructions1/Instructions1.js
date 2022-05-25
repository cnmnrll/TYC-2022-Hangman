import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Instructions1.css";

const Instructions1 = () => {
  return (
    <div>
      <h1>Instructions</h1>
      <h1 className="instructions">1. Player will input a category and a word for other player(s) to guess.
        <br/> 2. Other player(s) will then have to guess the word based on the cateogry hint.
        <br/> 3. If the other player(s) guesses the word correctly, he/she wins.
        <br/> 4. If the other player(s) fails to guess the word by exceeding 10 wrong attempts, the man is hanged and he/she loses.
      </h1>
      <Link to="/Game1">
        <Button>START GAME</Button>
      </Link>
    </div>
  );
};

export default Instructions1;
