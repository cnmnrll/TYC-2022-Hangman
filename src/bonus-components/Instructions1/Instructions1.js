import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Instructions1 = () => {
  return (
    <div>
      <h1>Instructions1 goes here</h1>
      <Link to="/Game1">
        <Button>START GAME</Button>
      </Link>
    </div>
  );
};

export default Instructions1;
