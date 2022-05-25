import React from 'react';

const DisplayWord = ({ selectedWord, correctLetters }) => {

  return (
    <div className="displayword">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default DisplayWord
