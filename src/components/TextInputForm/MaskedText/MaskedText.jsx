import {getMaskedString} from "./MaskingUtility" ;

function MaskedText(text,guessedLetter){
const maskedString=getMaskedString(text,guessedLetter);
    return (
        <>
            {maskedString.map((letter,index)=>{
                   return(
                    <span key={index} className="mx-1">
                         {letter}
                    </span>
                   )
            })}
        </>
    )
}
export default MaskedText