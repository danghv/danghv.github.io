var questions = [
  {
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  },
  {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  },
  {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  },
  {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  },
  {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
  }
];
var questionCounter = 0; //Tracks question number
var selections = [];      // Array containing user choices
var quiz = document.getElementById("quiz");
displayNext();

document.getElementById("next").addEventListener("click", function(){
  var radios = document.getElementsByName("answer");
  for(var i = 0; i<radios.length; i++){
    if(radios[i].checked){
      selections[questionCounter] = radios[i].value;
    }
  }
  
});

