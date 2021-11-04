const start = document.getElementById('startQuiz');
const questioncon = document.getElementById('imageQuestion');
const quiz = document.getElementById("game");

start.addEventListener('click',newGame);

let  currentQuestion,randomNumberArr;


function newGame(){
    
    
    currentQuestion = 0
    randomNumberArr = questionArr.sort(()=> Math.random() - .5)
    getNextQuestion()
}




function getNextQuestion(){
   
    loadQuestion(randomNumberArr[currentQuestion]);
    document.getElementById("answer1").innerHTML = questionArr[currentQuestion].choices[0];
    document.getElementById("answer2").innerHTML = questionArr[currentQuestion].choices[1];
    document.getElementById("answer3").innerHTML = questionArr[currentQuestion].choices[2];
    document.getElementById("answer4").innerHTML = questionArr[currentQuestion].choices[3];
}
function loadQuestion(question){
    questioncon.innerHTML = question.question;
    
      
    
    
}



/**Question list
 */



let questionArr = [
  {
    question: "anenome",
    choices: ["Sunflower","Erigeron","Osmanthus","Anenome"],
    correctAnswer:"Anenome",
  },
  {
    question: "osmanthus",
    choices: ["Sunflower","Erigeron","Osmanthus","Anenome"],
    correctAnswer:"Osmanthus"},
  {
    question: "erigeron",
    choices: ["Sunflower","Erigeron","Osmanthus","Anenome"],
    correctAnswer:"Erigeron",
},
]



//calls next question




function checkAnswer(){

};



function audience(){

};
//percentage answer millionare style

function fiftyFifty(){

};
//take off two wrong answers

function friend(){

};//your friend isnt sure, your friend knows the answer alert etc.








