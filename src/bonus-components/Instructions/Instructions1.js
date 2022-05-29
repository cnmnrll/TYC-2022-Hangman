import React from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Instructions.css";

const Instructions1 = () => {
  return (
    <div>
      <h1 id="heading">Instructions</h1>
      <Row className="justify-content-center">
        <h1 id="instructions">
          1. Player will <span id="span">input a category and a word</span> for
          other player(s) to guess.
          <br /> 2. Other player(s) will then have to guess the word based on
          the cateogry hint.
          <br /> 3. The player will do so by{" "}
          <span id="span">double clicking</span> on the keys provided.
          <br /> 4. If the other player(s) guesses the word correctly, he/she
          wins.
          <br /> 5. If the other player(s) fails to guess the word by exceeding
          <span id="span"> 6 wrong attempts</span>, the man is hanged and he/she
          loses.
        </h1>
      </Row>
      <Row className="text-center">
        <Link to="/input">
          <Button id="button">START GAME</Button>
        </Link>
      </Row>
    </div>
  );
};

export default Instructions1;
