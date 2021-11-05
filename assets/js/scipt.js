

const start = document.getElementById('startQuiz');
const questioncon = document.getElementById('imageQuestion');
const quiz = document.getElementById("game");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const score = document.getElementById("score");
let currentScore = 0;
let  currentQuestion = 0;








function loadNextQ(){
  currentQuestion = currentQuestion +1;
  getNextQuestion();
}



//creates question and loads answers onto buttons x 4
function getNextQuestion(){
    if(currentQuestion>=questionArr.length){
      console.log("endgame")
    }
    else{
    a = questionArr[currentQuestion];
    
      questioncon.innerHTML = "<img src =" + a.question +">";
      answer1.innerHTML = a.choice1;
      answer2.innerHTML = a.choice2;
      answer3.innerHTML = a.choice3;
      answer4.innerHTML = a.choice4;
      }
}
    
    
    




function userChoice(answer){
  
  
  if(answer === questionArr[currentQuestion].correctAnswer){
    currentScore = currentScore+1;
    
    updateScore();
    loadNextQ();
   
     
    
    
  }
  else{
    console.log("wrong");
    loadNextQ();

  }
  
  
    
}

function updateScore(){
  score.innerHTML = currentScore;
}
/**Question list
 */



let questionArr = [
  {
    question : "assets/img/anenome.jpg",
    choice1 :"Sunflower",
    choice2 :"Erigeron",
    choice3 :"Osmanthus",
    choice4 :"Anenome",
    correctAnswer :"d",
  },
  {
    question : "assets/img/osmanthus.jpg",
    choice1 :"Sunflower",
    choice2 :"Erigeron",
    choice3 :"Osmanthus",
    choice4 :"Anenome",
    correctAnswer :"c",
  },
  {
    question : "assets/img/erigeron.jpg",
    choice1 :"Sunflower",
    choice2 :"Erigeron",
    choice3 :"Osmanthus",
    choice4 :"Anenome",
    correctAnswer:"b",
},
]
start.addEventListener('click',newGame);
function newGame(){
    
    
  currentQuestion = 0;
 
  getNextQuestion();
  currentScore = 0;
  
  
}

//calls next question








//function audience(){

//};
//percentage answer millionare style

//function fiftyFifty(){

//};
//take off two wrong answers

//function friend(){

//};//your friend isnt sure, your friend knows the answer alert etc.
