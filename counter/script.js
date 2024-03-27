const countText = document.querySelector(".counter");
const wordsTextarea = document. querySelector(".counter .text");
const countBtn = document. querySelector(".counter .count-btn");
 const wordResult = document. querySelector(".counter .word-result span");
const lettersResult = document. querySelector(".counter .letters-result span");
 const sentenceResult = document. querySelector(".counter .sentence-result  span");
 const limitResult = document.querySelector(".current-number");

//word
const  constWord = () => {
    let words = wordsTextarea.value;
    let wordsTrimmed = words.replace(/\s+/g, " ").trim();
    let splitWords  = wordsTrimmed.split(" ");
    console.log(splitWords);
    if(splitWords[0] == ""){
        number0fWords = 0;
    }
    
    let number0fWords = splitWords.length;
   

    wordResult.innerHTML = number0fWords;
    
    

};
//letters

const constLetters = () => {
let letters = wordsTextarea.value;
let lettersTrimmid = letters.replace(/\s+/g, " ").trim();

console.log(lettersTrimmid );

if(lettersTrimmid[0] == ""){
    number0fLetters = 0;
}
let number0fLetters = lettersTrimmid.length;
    lettersResult.innerHTML = number0fLetters ;
    


}

//sentence

const constSentence = () =>{
    let text = wordsTextarea.value.trim();
     sentenceResult.textContent = text.split(/[.:|!|?]+/g).length-1;

}

//limit

wordsTextarea.addEventListener("keyup", ()=>{
let valLenght = wordsTextarea.value.length;
limitResult.innerText = valLenght;

(valLenght > 0) ? countText.classList.add("active"):countText.classList.remove("active");
(valLenght > 100) ? countText.classList.add("error"):countText.classList.remove("error");

console.log(valLenght);
});
//click
countBtn.addEventListener("click", constWord);
countBtn.addEventListener("click", constLetters);
countBtn.addEventListener("click", constSentence);

