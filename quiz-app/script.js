const quizData = [
    {
        question: "How old is Florin?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c"
    }, {
        Question: "What is the best programming language in 2019?",
        a: "java",
        b: "c",
        c: "python",
        d: "javascript",
        correct: "d"
    }, {
        question: "Who is the president of US?" ,
        a: "Florin pop",
        b: "Donald trump",
        c: "Ivan Saldano",
        d: "Mihai andrei",
        correct: "b"
    }, {
        question: "What does HTML stands for?" ,
        a: "Hypertext Markup Language ",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    } ,{
        question: "What year was javascript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    }
];

const answerEls = document.querySelectorAll("answer");
const quiz= document.getElementById("quiz");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];



    questionE1.innerText =currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");

    
    answerEls.forEach(answerEl  => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    // check to see the answer
    const answer =  getSelected();
    

    if(answer)
        {
            if (answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
            if(currentQuiz < quizData.length){
             loadQuiz();
            }
            
            else {
              quiz.innerHTML = `<h2>You answerd correctly at ${score}/${quizData.length} questions.</h2>  <button onClick="location.reload()">reload</button>`;
            }
            
}

});