window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
const start = document.getElementById('startQuiz');
const questioncon = document.getElementById('imageQuestion');
const quiz = document.getElementById("game");
const answerbtn = document.getElementsByClassName("answbtn");

start.addEventListener('click',newGame);
let currentScore
let  currentQuestion,randomNumberArr;


function newGame(){
    
    
    currentQuestion = 0;
    randomNumberArr = questionArr.sort(()=> Math.random() - .5);
    getNextQuestion();
    currentScore = 0;
    checkAnswer();
}



//creates question and loads answers onto buttons x 4
function getNextQuestion(){
    currentQuestion = currentQuestion ++;
    if(currentQuestion >= questionArr.length){
      endGame();
    }
    loadQuestion(randomNumberArr[currentQuestion]);
    document.getElementById("answer1").innerHTML = questionArr[currentQuestion].choices[0];
    document.getElementById("answer2").innerHTML = questionArr[currentQuestion].choices[1];
    document.getElementById("answer3").innerHTML = questionArr[currentQuestion].choices[2];
    document.getElementById("answer4").innerHTML = questionArr[currentQuestion].choices[3];
}
//loads question element to question container
function loadQuestion(question){
    questioncon.innerHTML = "<img src =" +question.question+">";
}

function checkAnswer(){

    }
      

    
    ;

function endGame(){



}


/**Question list
 */



let questionArr = [
  {
    question: "assets/img/anenome.jpg",
    choices: ["Sunflower","Erigeron","Osmanthus","Anenome"],
    correctAnswer:"Anenome",
  },
  {
    question: "assets/img/osmanthus.jpg",
    choices: ["Sunflower","Erigeron","Osmanthus","Anenome"],
    correctAnswer:"Osmanthus"},
  {
    question: "assets/img/erigeron.jpg",
    choices: ["Sunflower","Erigeron","Osmanthus","Anenome"],
    correctAnswer:"Erigeron",
},
]



//calls next question








function audience(){

};
//percentage answer millionare style

function fiftyFifty(){

};
//take off two wrong answers

function friend(){

};//your friend isnt sure, your friend knows the answer alert etc.








