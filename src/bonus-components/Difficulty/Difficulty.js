import React from "react";
import "./Difficulty.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Difficulty = () => {
  function handleClick(event) {
    const difficulty = event.target.value;
    localStorage.setItem("difficulty", difficulty);
  }

  return (
    <div>
      <Container className="justify-content-center">
        <Row id="difficulty-heading">
          <p>SELECT DIFFICULTY</p>
        </Row>
        <Col className="d-flex justify-content-center">
          <Link to="/instructions-classic">
            <Button
              onClick={handleClick}
              value="normal"
              id="difficulty-buttons"
            >
              NORMAL
            </Button>
          </Link>
          <Link to="/instructions-classic">
            <Button onClick={handleClick} value="hard" id="difficulty-buttons">
              HARD
            </Button>
          </Link>
        </Col>
      </Container>
    </div>
  );
};

export default Difficulty;
