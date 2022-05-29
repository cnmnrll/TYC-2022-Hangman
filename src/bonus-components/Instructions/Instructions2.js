import React from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Instructions.css";

const Instructions2 = () => {
  return (
    <div>
      <h1 id="heading">Instructions</h1>
      <Row className="justify-content-center">
        <h1 id="instructions">
          1. The player will first be given a <span id="span">category</span>,
          e.g. animals.
          <br /> 2. The player will then have to guess the word based on the
          category.
          <br /> 3. The player will do so by{" "}
          <span id="span">double clicking</span> on the keys provided.
          <br /> 4. If the player guesses the word correctly, he/she wins.
          <br /> 5. If the player fails to guess the word by exceeding{" "}
          <span id="span">6 wrong attempts</span>, the man is hanged and he/she
          loses.
        </h1>
      </Row>
      <Row className="text-center">
        <Link to="/game-classic">
          <Button id="button">START GAME</Button>
        </Link>
      </Row>
    </div>
  );
};

export default Instructions2;
