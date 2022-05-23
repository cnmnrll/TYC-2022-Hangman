import React from "react";
import "./NavHome.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const NavHome = () => {
  return (
    <div>
      <Container className="justify-content-center">
        <Row id="navhome-heading">
          <p>CHOOSE A GAME MODE</p>
        </Row>
        <Row>
          <Col className="text-center">
            <Button id="navhome-buttons">CLASSIC</Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button id="navhome-buttons">ARCADE</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavHome;
