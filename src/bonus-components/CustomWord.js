import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  FormControl,
  Row,
  Form,
  Container,
  Button,
} from "react-bootstrap";
import "./CustomWord.css";

const CustomWord = () => {
  const [state, setState] = useState({
    word: "",
    cat: "",
  });

  function handleWordChange(event) {
    setState((prevState) => ({
      ...prevState,
      word: event.target.value,
    }));
  }

  function handleCatChange(event) {
    setState((prevState) => ({
      ...prevState,
      cat: event.target.value,
    }));
  }

  function handleClick() {
    localStorage.setItem("word", state.word);
    localStorage.setItem("category", state.cat);
  }

  return (
    <div>
      <Container className="justify-content-center">
        <Row className="text-center">
          <p id="input-heading">ENTER WORD AND CATEGORY</p>
        </Row>

        <Form id="input-form">
          <FormControl
            id="input"
            placeholder="enter word"
            autoFocus
            onChange={handleWordChange}
            value={state.word}
          />
          <FormControl
            id="input"
            placeholder="enter category"
            autoFocus
            onChange={handleCatChange}
            value={state.cat}
          />
          <Row className="text-center">
            <Link to="/game-friends">
              <Button id="button" onClick={handleClick}>
                DONE
              </Button>
            </Link>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default CustomWord;
