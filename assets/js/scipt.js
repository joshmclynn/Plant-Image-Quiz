const start = document.getElementById('startQuiz');
const questioncon = document.getElementById('imageQuestion');
const quiz = document.getElementById("game");
const answerbutton = document.getElementById('answerbtn');
start.addEventListener('click',newGame);

let  currentQuestion;


function newGame(){
    getNextQuestion();
    randomQuestion = questionArr.sort();
    currentQuestion = 0;

}
function getNextQuestion(){
    loadQuestion(questionArr[1]);
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








