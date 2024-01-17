let para = document.getElementById('para');
let start = document.getElementById('start');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let ansboxes = document.querySelectorAll('.ansOptions p');

let op1 = document.querySelector('.op1');
let op2 = document.querySelector('.op2');
let op3 = document.querySelector('.op3');
let op4 = document.querySelector('.op4');

let hideNextBtn = document.querySelector('.hideNext');
let hidePreviousBtn = document.querySelector('.hidePrevious');

const questionSet = [
  {
    question: 'What does HTML stand for?',
    ans: [
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'High-level Text Markup Language', correct: false },
      { text: 'Hyperlink and Text Markup Language', correct: false },
      { text: 'Home Tool Markup Language', correct: false },
    ],
  },
  {
    question: 'In programming, what does the acronym "CSS" stand for?',
    ans: [
      { text: 'Computer Style Sheet', correct: false },
      { text: 'Creative Style Sheet', correct: false },
      { text: 'Cascading Style Sheet', correct: true },
      { text: 'Colorful Style Sheet', correct: false },
    ],
  },
  {
    question: 'What is the primary purpose of JavaScript in web development?',
    ans: [
      { text: 'Server-side scripting', correct: false },
      { text: 'Client-side scripting', correct: true },
      { text: 'Database management', correct: false },
      { text: 'Data analysis', correct: false },
    ],
  },
  {
    question: 'Which programming language is known for its use in machine learning and artificial intelligence?',
    ans: [
      { text: 'Java', correct: false },
      { text: 'Python', correct: true },
      { text: 'C++', correct: false },
      { text: 'Ruby', correct: false },
    ],
  },
  {
    question: 'What does the acronym "API" stand for?',
    ans: [
      { text: 'Application Programming Interface', correct: true },
      { text: 'Advanced Program Integration', correct: false },
      { text: 'Automated Protocol Interface', correct: false },
      { text: 'Application Process Interface', correct: false },
    ],
  },
  {
    question: 'In Python, how is a comment indicated?',
    ans: [
      { text: '//', correct: false },
      { text: '/* */', correct: false },
      { text: '#', correct: true },
      { text: '<!-- -->', correct: false },
    ],
  },
  {
    question: 'What does the term "SQL" stand for in database management?',
    ans: [
      { text: 'Structured Query Language', correct: true },
      { text: 'Simple Question Language', correct: false },
      { text: 'Scripted Query Language', correct: false },
      { text: 'Server Quality Language', correct: false },
    ],
  },
  {
    question: 'Which data type is used to store whole numbers in Python?',
    ans: [
      { text: 'float', correct: false },
      { text: 'int', correct: true },
      { text: 'char', correct: false },
      { text: 'string', correct: false },
    ],
  },
  {
    question: 'What does the term "OOP" stand for in programming?',
    ans: [
      { text: 'Object-Oriented Programming', correct: true },
      { text: 'Object-Oriented Processing', correct: false },
      { text: 'Operator-Oriented Programming', correct: false },
      { text: 'Operator-Oriented Processing', correct: false },
    ],
  },
  {
    question: 'What is the purpose of the "git" version control system?',
    ans: [
      { text: 'To write code', correct: false },
      { text: 'To test code', correct: false },
      { text: 'To manage and track changes in code', correct: true },
      { text: 'To debug code', correct: false },
    ],
  },
  {
    question: 'Which programming language is often used for developing mobile applications?',
    ans: [
      { text: 'Swift', correct: true },
      { text: 'Java', correct: true },
      { text: 'C#', correct: true },
      { text: 'All of the above', correct: true },
    ],
  },
  {
    question: 'What is the output of the following code snippet in Python: print(3 * \'abc\')?',
    ans: [
      { text: 'abcabcabc', correct: true },
      { text: '9', correct: false },
      { text: 'abc', correct: false },
      { text: 'Error', correct: false },
    ],
  },
  {
    question: 'In JavaScript, what is the purpose of the addEventListener method?',
    ans: [
      { text: 'To create a new event', correct: false },
      { text: 'To handle an event', correct: true },
      { text: 'To remove an event', correct: false },
      { text: 'To modify an event', correct: false },
    ],
  },
  





  








];

















let current = 0;
let questionNo = 1;

start.addEventListener('click', function () {
  show();
  hideNextBtn.classList.remove('hideNext');
  this.remove();
  chekans()
  
});

next.addEventListener('click', function () {
    clearOptionClasses()
  questionNo = questionNo + 1;
  current = current + 1;
  show();
  hidePreviousBtn.classList.remove('hidePrevious');
  chekans()

})

previous.addEventListener('click', function () {
  if (current > 0) {
    questionNo = questionNo - 1;
    current = current - 1;
    show();
  } else if (current === 0) {
    hidePreviousBtn.classList.add('hidePrevious');
    chekans()
  }
});

function show() {
  para.innerText = `${questionNo}. ${questionSet[current].question}`;
  op1.innerText = questionSet[current].ans[0].text;
  op2.innerText = questionSet[current].ans[1].text;
  op3.innerText = questionSet[current].ans[2].text;
  op4.innerText = questionSet[current].ans[3].text;
}


function chekans() {
  ansboxes.forEach((box) => {
    box.addEventListener('click', function () {
      if (box.innerText === questionSet[current].ans.find(ans => ans.correct).text) {
        box.style.backgroundColor = 'green';
      } else {
        box.style.backgroundColor = 'red';
      }
    });
  });
}







function clearOptionClasses() {
    ansboxes.forEach((op) => {
        op1.style.backgroundColor=''
        op2.style.backgroundColor=''
        op3.style.backgroundColor=''
        op4.style.backgroundColor=''
    });
}
