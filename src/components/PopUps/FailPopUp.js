//zhi ying

import React, {useEffect} from 'react';
import "./FailPopUp.css";

function checkWin(correct, wrong, word) {
    let status = 'win';
  
    // Check for win
    word.split('').forEach(letter => {
      if(!correct.includes(letter)){
        status = '';
      }
    });
    
    // Check for lose
    if(wrong.length === 6) status = 'lose';
  
    return status
  }

const FailPopUp = ({wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessageRevealWord = '';
  let playable = true;

  if ( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Try again next time';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {setPlayable(playable);});

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
};


export default FailPopUp;
