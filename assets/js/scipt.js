

const start = document.getElementById('startQuiz');
const questioncon = document.getElementById('imageQuestion');
const quiz = document.getElementById("game");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const score = document.getElementById("score");
const end = document.getElementById("end");
const endGamebtn = document.getElementById("reset");
const welcome = document.getElementById("welcome");
const friendbtn = document.getElementById("friend");
const fiftybtn = document.getElementById("fiftyfifty");
const onloadscrn = document.getElementById("onload");
const expertbtn = document.getElementById("expert");
let currentScore = 0;
let  currentQuestion = 0;








function loadNextQ(){
  currentQuestion = currentQuestion +1;
  if(currentQuestion>=questionArr.length){
    
    endGame();
  }else{
    answer1.style.display ="block";
    answer2.style.display ="block";
    answer3.style.display ="block";
    answer4.style.display ="block";
  
  getNextQuestion();
}
}



//creates question and loads answers onto buttons x 4
function getNextQuestion(){
    
  
    a = questionArr[currentQuestion];
      questioncon.innerHTML = "<img src =" + a.question +">";
      answer1.innerHTML = a.choice1[0];
      answer2.innerHTML = a.choice2[0];
      answer3.innerHTML = a.choice3[0];
      answer4.innerHTML = a.choice4[0];
      }


    
    
    




function userChoice(answer){
  
  
  if(answer === questionArr[currentQuestion].correctAnswer[0]){
    currentScore = currentScore+1;
    correctAnswer();
    updateScore();
    
   
     
    
    
  }
  else{
    console.log("wrong");
    incorrectAnswer();
    

  }
  
  
    
}
function correctAnswer(){
  //sweetAlert2
  Swal.fire({
    icon: 'success',
    title: 'Correct!',
    
  })
  loadNextQ();
}
function incorrectAnswer(){
  //sweetAlert2
  Swal.fire({
    icon: 'error',
    title: 'Incorrect',
    
  })
  loadNextQ();
}
//fifty fifty chance function
function fifty(){
    x = questionArr[currentQuestion].correctAnswer[0];
    a = questionArr[currentQuestion];
    if(x == a.choice1[1]){
      answer1.innerHTML = a.choice1[0];
      answer2.innerHTML = a.choice2[0];
      answer3.style.display ="none";
      answer4.style.display ="none";
      
      
    }
    if(x == a.choice2[1]){
      answer1.style.display ="none";
      answer2.innerHTML = a.choice2[0];
      answer3.innerHTML = a.choice3[0];
      answer4.style.display ="none";
      
    }
    if(x == a.choice3[1]){
      answer1.style.display ="none";
      answer2.style.display ="none";
      answer3.innerHTML = a.choice3[0];
      answer4.innerHTML = a.choice4[0];
      
      
    }
    if(x == a.choice4[1]){
      answer1.style.display ="none";
      answer2.innerHTML = a.choice2[0];
      answer3.style.display ="none";
      answer4.innerHTML = a.choice4[0];
      
    }
    fiftybtn.disabled=true;
    ;
}
//function for phone a friend
function friend(){
    c = questionArr[currentQuestion];
    x = a.correctAnswer[1];
    r = Math.floor(Math.random()*(0,2));
    console.log(r);
    if(r<=1){
      //sweetAlert2
      Swal.fire({
        title: "Phoning Friend",
        text: "Oh I know nothing about gardening sorry."

      })
    }
    if(r>=1){
      //sweetAlert2
      Swal.fire({
        title: "Phoning Friend",
        text: "Its definately "+ x +" 100%",

      })
    }
    friendbtn.disabled=true;
    
}

function askExpert(){
    x = a.correctAnswer[1];
    //sweetAlert
    Swal.fire({
      title: "Expert Theo",
      text: "I think its a yew?",

    })
    expertbtn.disbled=true;
    
}
function updateScore(){
  score.innerHTML = currentScore;
}
/**Question list
 */
function endGame(){
  game.style.display = "none";
  
  end.innerHTML = currentScore;
  if(currentScore >=2){
    Swal.fire({
      
      title: 'Nice One',
      text: 'You scored '+currentScore+' !'
      
    })
  }
  
  console.log("endgame")
  endGamebtn.style.display="block";
}
function reset(){
  currentScore = 0;
  location.reload();
}





let questionArr = [
  {
    question : "assets/img/anenome.jpg",
    choice1 :["Sunflower","a"],
    choice2 :["Erigeron","b"],
    choice3 :["Osmanthus","c"],
    choice4 :["Anenome","d"],
    correctAnswer :["d","Anenome"],
   

  },
  {
    question : "assets/img/osmanthus.jpg",
    choice1 :["Sunflower","a"],
    choice2 :["Erigeron","b"],
    choice3 :["Osmanthus","c"],
    choice4 :["Anenome","d"],
    correctAnswer :["c","Osmanthus"],
  },
  {
    question : "assets/img/erigeron.jpg",
    choice1 :["Sunflower","a"],
    choice2 :["Erigeron","b"],
    choice3 :["Osmanthus","c"],
    choice4 :["Anenome","d"],
    correctAnswer:["b","Erigeron"],
},
]




start.addEventListener('click',newGame);
function newGame(){
    
  onloadscrn.style.display = "none";
  
  game.style.display = "grid";
  friendbtn.disabled=false;
  fifty.disabled=false;
  expertbtn.disbled=false;
  currentQuestion = 0;

 
  getNextQuestion();
  currentScore = 0;
  
  
}










