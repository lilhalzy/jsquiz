const start = document.querySelector(".start_btn");
const question_container = document.getElementById("question_container");
const question_printed = document.getElementById("question");
const answers = document.getElementById("answer_buttons");
const next = document.getElementById("next");
const body = document.getElementById("body");
let shuffle, curr_num;

const questions = [
  {
    question: 'What is this quizes for?',
    answers: [
      {text: 'JavaScript', correct: true},
      {text: 'TypeScript', correct: false},
      {text: 'Python', correct: false},
    ]
  },
  {
    question: 'How to become a great programmer?',
    answers: [
      {text: 'Become better at planting plants', correct: false},
      {text: 'Always be on coding', correct: false},
      {text: 'Always learn to code', correct: true},
    ]
  },
  {
    question: 'Do you love JavaScript?',
    answers: [
      {text: 'Forcing myself to love JavaScript', correct: true},
      {text: 'JavaScript? What is that?', correct: false},
      {text: 'I only know on how to center a div', correct: false},
    ]
  },
]

const array = ["2, 3", "3"]