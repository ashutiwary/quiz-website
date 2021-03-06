const quizDB = [
    {
        question: "Q.1: What is Html?",
        a: "hyper tect markup lang.",
        b: "Hyper text markup Language",
        c: "Hyper text Markup Program",
        d: "Hyper text scripting language",
        ans: "ans2"
    },
    {
        question: "Q.2: Full Form of JS?",
        a: "Javascript",
        b: "Java",
        c: "Junk script",
        d: "Java code",
        ans: "ans1"
    },
    {
        question: "Q.3: Full form of DB?",
        a: "Data structure",
        b: "Data Base",
        c: "Storage",
        d: "Data System",
        ans: "ans2"
    },
    {
        question: "Q.4: Full Form of DSA?",
        a: "Data Structure Algorithm",
        b: "Data Structure program",
        c: "Data Structure code",
        d: "Data Structure language",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const suubmit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount]; 
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
        answer = curAnsElem.id;
        }
    });
    return answer;
};


const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}
submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;


        showScore.classList.remove('scoreArea');
    }
});
