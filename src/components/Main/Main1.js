import React from "react";
import "./Main1.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Modal } from "react-bootstrap";

const Main1 = (props) => {
  const word = localStorage.getItem("word");
  const category = localStorage.getItem("category");
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  let initialList = [];
  function createList() {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "-") {
        initialList.push("- ");
      } else {
        initialList.push("__ ");
      }
    }
  }
  createList();

  const [letterDisplay, setLetterDisplay] = useState(initialList);

  const [wrongGuesses, setWrongGuesses] = useState([]);

  if (!localStorage.getItem("words guessed")) {
    localStorage.setItem("words guessed", "");
  }

  var wg = localStorage.getItem("words guessed");

  const [wordsGuessed, setWordsGuessed] = useState(wg);

  function handleClick(event) {
    const input = event.target.value;
    let indexes = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === input) {
        indexes.push(i);
      }
    }
    if (indexes.length === 0) {
      if (
        !wrongGuesses.includes(input + "  ") &&
        !(wrongGuesses.length === 6)
      ) {
        setWrongGuesses((prevWrongGuesses) => [
          ...prevWrongGuesses,
          input + "  ",
        ]);
      } else if (wrongGuesses.length === 6) {
        setModalTitle("OOPS...");
        setModalBody(
          'NICE TRY ! THE WORD IS "' + word + '" CLICK BELOW TO PLAY AGAIN'
        );
        setShow(true);
      }
    } else if (wrongGuesses.length === 6) {
      setModalTitle("OOPS...");
      setModalBody(
        'NICE TRY ! THE WORD IS "' + word + '" CLICK BELOW TO PLAY AGAIN'
      );
      setShow(true);
    } else {
      for (let idx = 0; idx < indexes.length; idx++) {
        setLetterDisplay((prevLetterDisplay) => [
          ...prevLetterDisplay.slice(0, indexes[idx]),
          input + " ",
          ...prevLetterDisplay.slice(indexes[idx] + 1),
        ]);
      }
    }
    if (!letterDisplay.includes("__ ")) {
      setModalTitle("CONGRATS !");
      setModalBody("YOU GUESSED THE WORD ! CLICK BELOW TO PLAY AGAIN");
      setShow(true);
      if (localStorage.getItem("words guessed")) {
        let s = localStorage.getItem("words guessed");
        s = s + ", " + word;
        localStorage.setItem("words guessed", s);
        setWordsGuessed(s);
      }
    }
  }

  return (
    <div>
      <h1 className="heading">Guess the word from category :</h1>
      <br />
      <h1 className="category">{category}</h1>
      <div className="hangman-container">
        <svg height="250" width="220" className="svg">
          {/* <!-- Rod --> */}
          <line id="stickman" x1="50" y1="20" x2="150" y2="20" />
          <line id="stickman" x1="150" y1="20" x2="150" y2="55" />
          <line id="stickman" x1="50" y1="20" x2="50" y2="240" />
          <line id="stickman" x1="20" y1="240" x2="80" y2="240" />

          {/* <!-- Head --> */}
          {wrongGuesses.length > 0 && (
            <circle id="stickman" cx="150" cy="80" r="25" />
          )}
          {/* <!-- Body --> */}
          {wrongGuesses.length > 1 && (
            <line id="stickman" x1="150" y1="105" x2="150" y2="190" />
          )}
          {/* <!-- Arms --> */}
          {wrongGuesses.length > 2 && (
            <line id="stickman" x1="150" y1="140" x2="120" y2="120" />
          )}
          {wrongGuesses.length > 3 && (
            <line id="stickman" x1="150" y1="140" x2="180" y2="120" />
          )}
          {/* <!-- Legs --> */}
          {wrongGuesses.length > 4 && (
            <line id="stickman" x1="150" y1="190" x2="120" y2="220" />
          )}
          {wrongGuesses.length > 5 && (
            <line id="stickman" x1="150" y1="190" x2="180" y2="220" />
          )}
        </svg>
        <h1 className="wrong-guesses">
          wrong guesses: <br /> {wrongGuesses}
        </h1>
      </div>
      <h1 className="letters-display">{letterDisplay}</h1>
      <Col className="text-center">
        <Button id="buttons" value="a" onClick={handleClick}>
          A
        </Button>
        <Button id="buttons" value="b" onClick={handleClick}>
          B
        </Button>
        <Button id="buttons" value="c" onClick={handleClick}>
          C
        </Button>
        <Button id="buttons" value="d" onClick={handleClick}>
          D
        </Button>
        <Button id="buttons" value="e" onClick={handleClick}>
          E
        </Button>
        <Button id="buttons" value="f" onClick={handleClick}>
          F
        </Button>
        <Button id="buttons" value="g" onClick={handleClick}>
          G
        </Button>
        <Button id="buttons" value="h" onClick={handleClick}>
          H
        </Button>
      </Col>
      <Col className="text-center">
        <Button id="buttons" value="i" onClick={handleClick}>
          I
        </Button>
        <Button id="buttons" value="j" onClick={handleClick}>
          J
        </Button>
        <Button id="buttons" value="k" onClick={handleClick}>
          K
        </Button>
        <Button id="buttons" value="l" onClick={handleClick}>
          L
        </Button>
        <Button id="buttons" value="m" onClick={handleClick}>
          M
        </Button>
        <Button id="buttons" value="n" onClick={handleClick}>
          N
        </Button>
        <Button id="buttons" value="o" onClick={handleClick}>
          O
        </Button>
      </Col>
      <Col className="text-center">
        <Button id="buttons" value="p" onClick={handleClick}>
          P
        </Button>
        <Button id="buttons" value="q" onClick={handleClick}>
          Q
        </Button>
        <Button id="buttons" value="r" onClick={handleClick}>
          R
        </Button>
        <Button id="buttons" value="s" onClick={handleClick}>
          S
        </Button>
        <Button id="buttons" value="t" onClick={handleClick}>
          T
        </Button>
        <Button id="buttons" value="u" onClick={handleClick}>
          U
        </Button>
      </Col>
      <Col className="text-center">
        <Button id="buttons" value="v" onClick={handleClick}>
          V
        </Button>
        <Button id="buttons" value="w" onClick={handleClick}>
          W
        </Button>
        <Button id="buttons" value="x" onClick={handleClick}>
          X
        </Button>
        <Button id="buttons" value="y" onClick={handleClick}>
          Y
        </Button>
        <Button id="buttons" value="z" onClick={handleClick}>
          Z
        </Button>
      </Col>
      <Col className="text-center">
        <p id="words-guessed">
          Words Guessed: <br /> {wordsGuessed}
        </p>
      </Col>
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
          <Modal.Title id="modal-title">{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="justify-content-center">
          <p id="modal-body">{modalBody}</p>
          <Col className="text-center">
            <Link to="/">
              <Button id="modal-button" onClick="window.location.reload()">
                HOME
              </Button>
            </Link>
            <Link to="/instructions-friends">
              <Button id="modal-button" onClick="window.location.reload()">
                PLAY AGAIN
              </Button>
            </Link>
          </Col>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Main1;
