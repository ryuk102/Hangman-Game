/**
 * 
 * @param {original word which is expected to be guessed} originalWord 
 * @param {letter which are guessed by user already} guessedLetter 
 * 
 * guessedLetter:['H','M','E']
 * 
 * return -> "H_M_E"
 */


export function getMaskedString(originalWord,guessedLetter){
       guessedLetter=guessedLetter.map(letter.toUpperCase());
      
       const guessedLetterSet=new Set(guessedLetter);

       const result =originalWord.toUpperCase().split('').map(char=>{
          if(guessedLetterSet.has(char)){
            return char;
          }else{
            return '_';
          }
       });

       return result;
}