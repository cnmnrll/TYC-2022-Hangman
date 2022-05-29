import React from "react";
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
              <h1 onClick="window.location.reload()" className="header">
                H
              </h1>
              <h1 onClick="window.location.reload()" className="header">
                A
              </h1>
              <h1 onClick="window.location.reload()" className="header">
                N
              </h1>
              <h1 onClick="window.location.reload()" className="header">
                G
              </h1>
              <h1 onClick="window.location.reload()" className="header">
                M
              </h1>
              <h1 onClick="window.location.reload()" className="header">
                A
              </h1>
              <h1 onClick="window.location.reload()" className="header">
                N
              </h1>
            </Col>
          </Link>
        </Row>
        <hr className="break" />
      </div>
    </div>
  );
};

export default Header;
