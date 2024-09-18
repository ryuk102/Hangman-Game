import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/TextInputForm/MaskedText/MaskedText";
import LetterButton from "../components/LetterButton/LetterButton";

function PlayGame(){
  const {state}=useLocation();
  return(
      <>
        <h1>Play Game{state.wordSelected}</h1>
        <MaskedText text={state.wordSelected} guessedLetter={[]}/>
          
          <div>
          <LetterButton text={state.wordSelected} guessedLetter={[]} onLetterClic={()=>{}}/>
          </div>
        
        <Link to='/start' className="text-blue-400">Start Game Link</Link>
      </>
  )
}
export default PlayGame;