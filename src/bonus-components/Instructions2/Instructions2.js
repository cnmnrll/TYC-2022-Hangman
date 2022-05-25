import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Instructions2 = () => {
  return (
    <div>
      <h1>Instructions2 goes here</h1>
      <Link to="/Game2">
        <Button>START GAME</Button>
      </Link>
    </div>
  );
};

export default Instructions2;
