import React from "react";
import "./Difficulty.css";
import { Button, Col, Container, Form, Row, Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Difficulty = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    localStorage.setItem("difficulty", event.target.value);
  };

  const [state, setState] = useState("");

  console.log(state);

  function handleChange(event) {
    setState(event.target.value);
  }

  function handleClick(event) {
    const difficulty = event.target.value;
    localStorage.setItem("difficulty", difficulty);
  }

  function handleBtnClick(event) {
    event.preventDefault();
    const name = state;
    localStorage.setItem("name", name);
  }

  return (
    <div>
      <Container className="justify-content-center">
        <Row id="difficulty-heading">
          <p>SELECT DIFFICULTY</p>
        </Row>
        <Col className=" d-flex justify-content-center">
          <Link to="/Instructions2">
            <Button
              onClick={handleClick}
              value="normal"
              id="difficulty-buttons"
            >
              NORMAL
            </Button>
          </Link>
          <Button onClick={handleShow} value="hard" id="difficulty-buttons">
            HARD
          </Button>
        </Col>
      </Container>
      <Modal
        id="modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title id="modal-title">enter your name</Modal.Title>
        </Modal.Header>
        <Modal.Body className="justify-content-center">
          <p id="modal-body">
            playing on this difficulty will display you on the leaderboard
          </p>
          <Form id="modal-form" className="d-flex" onClick={handleBtnClick}>
            <Form.Control
              id="modal-input"
              placeholder="enter name"
              autoFocus
              onChange={handleChange}
              value={state}
            />
            <Link to="/Instructions2">
              <Button id="modal-button" type="submit">
                done
              </Button>
            </Link>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Difficulty;
