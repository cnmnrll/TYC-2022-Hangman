//xueqing

import React from "react";
import "./Main.css";
import { useState } from "react";
import { category, word, randomIndexes } from "./RandomWord";
import { Button, Col } from "react-bootstrap";

const Main = () => {
  console.log(word);
  const difficulty = localStorage.getItem("difficulty");
  console.log(difficulty);

  let initialList = [];
  function createList() {
    if (difficulty === "normal") {
      console.log(randomIndexes);
      for (let i = 0; i < word.length; i++) {
        if (randomIndexes.includes(i)) {
          initialList.push(word[i] + " ");
        } else if (word[i] === "-") {
          initialList.push("- ");
        } else {
          initialList.push("__ ");
        }
      }
    } else {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === "-") {
          initialList.push("- ");
        } else {
          initialList.push("__ ");
        }
      }
    }
  }
  createList();

  const [letterDisplay, setLetterDisplay] = useState(initialList);

  const [wrongGuesses, setWrongGuesses] = useState([]);

  function handleClick(event) {
    const input = event.target.value;
    let indexes = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === input) {
        indexes.push(i);
      }
    }
    if (indexes.length === 0 && !wrongGuesses.includes(input)) {
      setWrongGuesses((prevWrongGuesses) => [
        ...prevWrongGuesses,
        input + "  ",
      ]);
    } else {
      for (let idx = 0; idx < indexes.length; idx++) {
        setLetterDisplay((prevLetterDisplay) => [
          ...prevLetterDisplay.slice(0, indexes[idx]),
          input + " ",
          ...prevLetterDisplay.slice(indexes[idx] + 1),
        ]);
      }
    }
  }

  return (
    <div>
      <h1 className="heading">Guess the word from category :</h1>
      <br />
      <h1 className="category">{category}</h1>
      <h1 className="hangman">hangman goes here</h1>
      <h1 className="wrong-guesses">wrong guesses : {wrongGuesses}</h1>
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
    </div>
  );
};

export default Main;
