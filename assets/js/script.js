const startTime = 1;
let time = startTime * 60;
var currentQuestionIndex = 0;
var score = 0;
var mixBut = document.getElementById("mixBut");
const countdownEl = document.getElementById('countdown');
var questionElement = document.getElementById('target');
var selectionsElement = document.getElementById('selections');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    // call displayQuestion function
}

function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question
    for(var i=0; i<questions[currentQuestionIndex].selections.length; i++){
        var newButton = document.createElement("button");
        selectionsElement.append(newButton);
        newButton.textContent = questions[currentQuestionIndex].selections[i];
        newButton.setAttribute("class", "button" + [i]);
        newButton.setAttribute("value", currentQuestion.selections[i])
    }
    // call the function that will be created below
}
// function
    // check if value that has been selcted is = to value on answer array
    // if not, time will subtract
    // increase currenQuestionIndex by 1

var questions = [
    {question: "Who invented JavaScript?",
    selections: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    answer: "Brendan Eich"
},
{question: "Which one of these is a JavaScript package manager?",
    selections: ["Node.js", "TypeScript", "npm"],
    answer: "npm"
},
{question: "Which tool can you use to ensure code quality?",
    selections: ["Angular", "jQuery", "RequireJS", "ESLint"],
    answer: "ESLint"
},
{question: "Which built-in method returns the calling string value converted to lower case?",
    selections: ["toLowerCase()", "toLower()", "changeCase(case)", "None of the Abov"],
    answer: "toLowerCase()"
},
{question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
    selections: ["slice()", "split()", "replace()", "search()"],
    answer: "split()"
}
]
// event listener call updateCountdown function
document.getElementById("myBtn").addEventListener("click", updateCountdown)