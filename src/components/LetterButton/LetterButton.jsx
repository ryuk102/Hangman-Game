

const Alphabets="QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButton({text,guessedLetter,onLetterClic}){
      const originalLetters=new Set(text.toUppercase.split(''));
      const guessedLetterSet=new Set(guessedLetter);
      
      const buttonStyle=function(letter){
        if(guessedLetterSet.has(letter)){
          return `${originalLetters.has(letter)?'bg-green-500' :'bg-red-500'}` ;
        }
      }
      const buttons =Alphabets.map(letter=>{
        return (
           <button
           key={`button-${letter}`}
           onClick={onLetterClic}
           disabled={guessedLetterSet.has(letter)}
           className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
           >
               {letter}
           </button>
        )
      })

      return (
        <>
          {buttons}
        </>
      )
}
export default LetterButton