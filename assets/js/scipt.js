/**
 * Initial variables
 */
const start = document.getElementById('startQuiz');
const questioncon = document.getElementById('imageQuestion');
const quiz = document.getElementById("game");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const end = document.getElementById("end");
const endGamebtn = document.getElementById("reset");
const welcome = document.getElementById("welcome");
const friendbtn = document.getElementById("friend");
const fiftybtn = document.getElementById("fiftyfifty");
const onloadscrn = document.getElementById("onload");
const expertbtn = document.getElementById("expert");
const instructbtn = document.getElementById("instructionbtn");
let currentScore = 0;
let currentQuestion = 0;
let incorrectCount = 0;

/**
 * Function to check whether the user has completed the quiz and to enable the buttons
 */
function loadNextQ() {
  currentQuestion = currentQuestion + 1;
  if (currentQuestion >= questionArr.length) {
      endGame();
  } 
  else {
    answer1.style.display = "block";
    answer2.style.display = "block";
    answer3.style.display = "block";
    answer4.style.display = "block";

    getNextQuestion();
  }
}
/**
 * Displays the next question and adds the answers to the buttons
 */
function getNextQuestion() {
  a = questionArr[currentQuestion];
  questioncon.innerHTML = "<img src =" + a.question + ">";
  answer1.innerHTML = a.choice1[0];
  answer2.innerHTML = a.choice2[0];
  answer3.innerHTML = a.choice3[0];
  answer4.innerHTML = a.choice4[0];
}

function userChoice(answer) {
  if (answer === questionArr[currentQuestion].correctAnswer[0]) {
    correctAnswer();
  } else {
    incorrectAnswer();
  }
}

/**
 * Function for pop up when the user selects an correct answer
 */
function correctAnswer() {
  //sweetAlert2
  Swal.fire({
    icon: 'success',
    title: 'Correct!',

  });
  currentScore = currentScore + 1;
  loadNextQ();
}

/**
 * Function for pop up when the user selects an incorrect answer
 */
function incorrectAnswer() {
  //sweetAlert2
  Swal.fire({
    icon: 'error',
    title: 'Incorrect',
  });
  incorrectCount = incorrectCount+1;
  loadNextQ();
}

/**
 * "fifty fifty" function, takes away two incorrect answers leaving the correct answer and an incorrect answer
 */
function fifty() {
  x = questionArr[currentQuestion].correctAnswer[0];
  a = questionArr[currentQuestion];
  
  if (x == a.choice1[1]) {
    answer1.innerHTML = a.choice1[0];
    answer2.innerHTML = a.choice2[0];
    answer3.style.display = "none";
    answer4.style.display = "none";
  }
  
  if (x == a.choice2[1]) {
    answer1.style.display = "none";
    answer2.innerHTML = a.choice2[0];
    answer3.innerHTML = a.choice3[0];
    answer4.style.display = "none";
  }
  
  if (x == a.choice3[1]) {
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.innerHTML = a.choice3[0];
    answer4.innerHTML = a.choice4[0];
  }
  
  if (x == a.choice4[1]) {
    answer1.style.display = "none";
    answer2.innerHTML = a.choice2[0];
    answer3.style.display = "none";
    answer4.innerHTML = a.choice4[0];
  }
  fiftybtn.style.display = "none";
}

/**
 * "phone a friend function, Two outcomes depending on a random number being generated"
 */
function friend() {
  c = questionArr[currentQuestion];
  x = a.correctAnswer[1];
  r = Math.floor(Math.random() * (0, 2));
  
  if (r <= 1) {
    Swal.fire({
      title: "Phoning Friend",
      text: "Oh sorry, I know nothing about gardening."
    });
  }
  
  if (r >= 1) {
    Swal.fire({
      title: "Phoning Friend",
      text: "Its definately " + x + " 100%",

    });
  }
  friendbtn.style.display = "none";
}

/**
 * Ask the expert function, always displays the correct answer.
 */
function askExpert() {
  x = a.correctAnswer[1];
  //sweetAlert
  Swal.fire({
    title: "Expert Theo",
    text: "I have seen these alot, its a " + x + "",
  });
  expertbtn.style.display = "none";
}

/**
 * Function to show the instructions when clicked on the opening page
 */
function instruction() {
  Swal.fire({
    title: 'The Rules',
    text: 'In this quiz you will get four choices where one will be the name of the plant in the picture, use the lifelines in order to gain an advantage, but be careful you can only use them once.'
  });
}

/**
 * End game functions, two outcomes depending on what the user scored
 */
function endGame() {
  game.style.display = "none";
  end.innerHTML = "Your Scored " + (currentScore) + " you can always try again if you would like!";

  if (currentScore >= 6) {
    Swal.fire({
      title: 'Well Done',
      text: 'You scored ' + currentScore + ' out of ' + questionArr.length + ' !'
    });
  }

  if (currentScore <= 5) {
    Swal.fire({
      title: 'Better Luck Next Time',
      text: 'You scored ' + currentScore + ' out of ' + questionArr.length + ' !'
    });
  }
  endGamebtn.style.display = "block";
  end.style.display = "block";
}

/**
 * Function to reset game after the user has finished
 */
function reset() {
  currentScore = 0;
  location.reload();
}

/**
 * Array for questions and correct answer
 */
let questionArr = [{
    question: "assets/images/geranium.jpg",
    choice1: ["Sunflower", "a"],
    choice2: ["Erigeron", "b"],
    choice3: ["Osmanthus", "c"],
    choice4: ["Geranium", "d"],
    correctAnswer: ["d", "Geranium"],
  },
  {
    question: "assets/images/osmanthus.jpg",
    choice1: ["Sunflower", "a"],
    choice2: ["Erigeron", "b"],
    choice3: ["Osmanthus", "c"],
    choice4: ["Anenome", "d"],
    correctAnswer: ["c", "Osmanthus"],
  },
  {
    question: "assets/images/erigeron.jpg",
    choice1: ["Sunflower", "a"],
    choice2: ["Erigeron", "b"],
    choice3: ["Osmanthus", "c"],
    choice4: ["Anenome", "d"],
    correctAnswer: ["b", "Erigeron"],
  },
  {
    question: "assets/images/caryopteris.jpg",
    choice1: ["Caryopteris", "a"],
    choice2: ["Viburnum", "b"],
    choice3: ["Skimmia", "c"],
    choice4: ["Ilex", "d"],
    correctAnswer: ["a", "Caryopteris"],
  },
  {
    question: "assets/images/dodonaea.jpg",
    choice1: ["Buxus", "a"],
    choice2: ["Prunus", "b"],
    choice3: ["Dodonaea", "c"],
    choice4: ["Anenome", "d"],
    correctAnswer: ["c", "Dodonaea"],
  },
  {
    question: "assets/images/persicaria.jpg",
    choice1: ["Lavender", "a"],
    choice2: ["Verbena", "b"],
    choice3: ["Persicaria", "c"],
    choice4: ["Geranium", "d"],
    correctAnswer: ["c", "Persicaria"],
  },
  {
    question: "assets/images/eupatorium.jpg",
    choice1: ["Buxus", "a"],
    choice2: ["Persicaria", "b"],
    choice3: ["Geranium", "c"],
    choice4: ["Eupatorium", "d"],
    correctAnswer: ["d", "Eupatorium"],
  },
  {
    question: "assets/images/melianthus.jpg",
    choice1: ["Sunflower", "a"],
    choice2: ["Melianthus", "b"],
    choice3: ["Erigeron", "c"],
    choice4: ["Anenome", "d"],
    correctAnswer: ["b", "Melianthus"],
  },
  {
    question: "assets/images/prunus.jpg",
    choice1: ["Taxus", "a"],
    choice2: ["Viburnum", "b"],
    choice3: ["Prunus", "c"],
    choice4: ["Anenome", "d"],
    correctAnswer: ["c", "Prunus"],
  },
  {
    question: "assets/images/ribes-sanguineum.jpg",
    choice1: ["Ribes-Sanguineum", "a"],
    choice2: ["Erigeron", "b"],
    choice3: ["Prunus", "c"],
    choice4: ["Geranium", "d"],
    correctAnswer: ["a", "Ribes-Sanguineum"],
  }
];

/**
 * Event listener for starting the game
 */
start.addEventListener('click', newGame);

/**
 * New game function, hiding the onload container and showing the quiz container also re enables lifelines that may have been used in the previous game
 */
function newGame() {
  onloadscrn.style.display = "none";
  game.style.display = "grid";
  friendbtn.disabled = false;
  fifty.disabled = false;
  expertbtn.disbled = false;
  currentQuestion = 0;
  getNextQuestion();
  currentScore = 0;
}