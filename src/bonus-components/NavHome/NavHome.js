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
          <Link to="/Instructions1">
            <Button id="navhome-buttons">CLASSIC</Button>
          </Link>
          <Link to="/difficulty">
            <Button id="navhome-buttons">ARCADE</Button>
          </Link>
        </Col>
      </Container>
    </div>
  );
};

export default NavHome;
