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

function start_quiz() {
  start.addEventListener('click', () => {
    curr_num = 0;
    question_container.classList.remove('hide')
    start.classList.add('hide')
    shuffle = questions.sort(() => Math.random() - .5)
    nextQuestion();
  })
  console.log("Quiz has been started");
}
start_quiz()

function nextQuestion() {
  reset()
  ShowQuestion(shuffle[curr_num]);
}

function ShowQuestion(question_parameter) {
  question_printed.textContent = question_parameter.question;
  question_parameter.answers.forEach(answer_parameter => {
    const button = document.createElement('button')
    button.innerHTML = answer_parameter.text;
    button.classList.add('btn')
    if (answer_parameter.correct) {
      button.dataset.correct = answer_parameter.correct
    }
    answers.appendChild(button)
    button.addEventListener('click', select_answer)
  })
}

function select_answer(e) {
  const selected_answer = e.target;
  const correct = selected_answer.dataset.correct
  // Giving background according to the answer
  Changebackground(document.body, correct)
  // End of the questions
  if(shuffle.length - 1 > curr_num) {
    next.classList.remove('hide')
  } else {
  question_printed = ''
  answers.innerHTML = ''
  start.innerHTML = 'Restart'
  start.classList.remove('hide')
  }
}

function Changebackground(element, correct) {
  clear(element)
  if(correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('incorrect')
  }
}

function clear(element) {
  element.classList.remove('correct')
  element.classList.remove('incorrect')
}


next.addEventListener('click', () => {
curr_num++;
reset()
ShowQuestion(shuffle[curr_num])
})

function reset() {

}

// Index2.html
const id = document.getElementById('id')
id.textContent = id.dataset.parent