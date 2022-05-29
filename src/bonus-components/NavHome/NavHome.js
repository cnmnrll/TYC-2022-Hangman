import React from "react";
import "./NavHome.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavHome = () => {
  return (
    <div id="body">
      <Container className="justify-content-center">
        <Row id="navhome-heading">
          <p>CHOOSE A GAME MODE</p>
        </Row>
        <Col className=" d-flex justify-content-center">
          <Link to="/instructions-friends">
            <Button id="navhome-buttons">
              <i id="icon" class="bi bi-people-fill"></i>
              <br />
              FRIENDS
            </Button>
          </Link>
          <Link to="/difficulty">
            <Button id="navhome-buttons">
              <i id="icon" class="bi bi-emoji-dizzy-fill"></i>
              <br />
              CLASSIC
            </Button>
          </Link>
        </Col>
      </Container>
    </div>
  );
};

export default NavHome;
