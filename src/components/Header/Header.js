//timothy

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div id="header-container">
        <Row>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Col id="header-head" className="justify-content-center">
              <h1 className="header">H</h1>
              <h1 className="header">A</h1>
              <h1 className="header">N</h1>
              <h1 className="header">G</h1>
              <h1 className="header">M</h1>
              <h1 className="header">A</h1>
              <h1 className="header">N</h1>
            </Col>
          </Link>
        </Row>
        <hr className="break" />
      </div>
    </div>
  );
};

export default Header;
