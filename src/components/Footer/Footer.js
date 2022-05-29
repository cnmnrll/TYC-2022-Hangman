import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div id="footer-container">
        <hr className="break" />
        <Row>
          <h1 id="footer-title">Tiktok Youth Camp 2022</h1>
        </Row>
        <Row id="footer-names" className="justify-content-center">
          <Col lg="2" md="2" sm="4">
            <h1 className="footer">ZhiYing</h1>
          </Col>
          <Col lg="2" md="2" sm="4">
            <h1 className="footer">Xueqing</h1>
          </Col>
          <Col lg="2" md="2" sm="4">
            <h1 className="footer">Wong</h1>
          </Col>
          <Col lg="2" md="2" sm="4">
            <h1 className="footer">Xun Yuan</h1>
          </Col>
          <Col lg="2" md="2" sm="4">
            <h1 className="footer">Justin</h1>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
