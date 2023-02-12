const quizDB = [

    {
        question: "Q1: What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"HyperText Makeup Language",
        ans:"ans3",
        option:"option3"

    },
    {
        question: "Q2: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Sick Soap",
        c:"Cascading Sigma Style",
        d:"Cartesian Style Shit",
        ans:"ans1",
        option:"option1"
    },
    {
        question: "Q3: What is the full form of JS?",
        a:"Jarvis",
        b:"Jaxa Script",
        c:"JavaScript",
        d:"Jarvecode",
        ans:"ans3",
        option:"option3"
    }
    ,{
        question: "Q3: Who is the daughter of Sachin Tendulkar?",
        a:"Sama Tendulkar",
        b:"Rani Tendulkar",
        c:"Menaakshi Tendulkar",
        d:"Sara Tendulkar",
        ans:"ans4",
        option:"option4"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

const submit = document.querySelector("#submit")

let questionCount=0;
let score=0;

//on load of the next question , it makes all the raido buttons uncchecked
const deselectChecked = ()=>{
    answers.forEach((currEle)=>{
        currEle.checked = false;
    });
};

const loadQuestion = () => {

    const questionList=quizDB[questionCount];
    
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option1.removeAttribute('style');

    option2.innerHTML = questionList.b;
    option2.removeAttribute('style');

    option3.innerHTML = questionList.c;
    option3.removeAttribute('style');

    option4.innerHTML = questionList.d;
    option4.removeAttribute('style');

    deselectChecked();

}

loadQuestion();

let selectedAnsClass; //class of the selected answer

//selects the input radio element which is checked and gives its id to answer variable
const getSelectedAnswer=()=>{
    let answer;
    //for each traverses over all the input radio buttons and selects the element which is checked
    answers.forEach((currEle)=>{
        if(currEle.checked){
            answer=currEle.id;
            selectedAnsClass=currEle.classList[1];
        }
        
    });
    return answer;
}

//click event on submit button
submit.addEventListener("click" , () => {
    const selectedAnswer = getSelectedAnswer();
    const selectedAnsOption = document.querySelectorAll(`.${selectedAnsClass}`);
    const correctOption = document.getElementById(`${quizDB[questionCount].option}`);

    console.log(selectedAnswer);
    console.log(selectedAnsClass);
    if(selectedAnswer === quizDB[questionCount].ans){
        score++;
        correctOption.style.backgroundColor='green';
        correctOption.style.color='white';
    }
    //if wrong answer selected , mark the selected answer as 'red' color and correct answer as green color
    else{
        for (let i = 0; i < selectedAnsOption.length; i++) {
            selectedAnsOption[i].style.backgroundColor = "red";
            selectedAnsOption[i].style.color = "white";

          }
        console.log(selectedAnsOption);

        correctOption.style.backgroundColor='green';
        correctOption.style.color='white';
    }
    questionCount++;

    if(questionCount<quizDB.length){
        setTimeout("loadQuestion()",1700);
    }
    else{
        showScore.innerHTML = `
        <h3>  Your Score ${score}/${quizDB.length} ✌️</h3>
        <button class="btn" onclick ="location.reload()">  Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});
console.log(answers);

