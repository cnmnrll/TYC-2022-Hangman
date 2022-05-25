//zhi ying

import React from "react";
import "./SuccessPopUp.css";

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


const SuccessPopUp = ({correctLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You saved the man!';
    playable = false;
  
    return (
      <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default SuccessPopUp;
