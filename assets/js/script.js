const startTime = 60;
let time = startTime;
var currentQuestionIndex = 0;
var score = 0;
let countdownInterval;

const countdownEl = document.getElementById('countdown');
var questionElement = document.getElementById('target');
var selectionsElement = document.getElementById('selections');
const currentQuestionElement = document.getElementById('currentQuestion');



function handleStartClick() {
		displayQuestion();
		countdownInterval = setInterval(updateCountdown, 1000);
}

function handleResetClick() {
    time = startTime;
    currentQuestionIndex = 0;
    score = 0;
		countdownEl.innerHTML = '';

    clearInterval(countdownInterval);
		resetQuesiton();
}

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

		const secondsDisplay = ("0" + seconds).substr(-2);
    countdownEl.innerHTML = `${minutes}:${secondsDisplay}`;
    
    if (time <= 0) {
    		handleGameOver();
    }
    
    time--;
}

function displayQuestion() {
		currentQuestionElement.textContent = currentQuestionIndex + 1;
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question
    for(var i=0; i<questions[currentQuestionIndex].selections.length; i++){
        var newButton = document.createElement("button");
        selectionsElement.append(newButton);
        newButton.textContent = currentQuestion.selections[i];
        newButton.setAttribute("class", "button" + [i]);
        newButton.setAttribute("value", currentQuestion.selections[i])
        newButton.addEventListener('click', function(e) {
            if (e.target.value !== currentQuestion.answer) {
            		time -= 5;
                return;
            }
            
            handleCorrectAnswer();
        });
    }
    // call the function that will be created below
}

function resetQuesiton() {
		questionElement.textContent = 'Q.';
    selectionsElement.innerHTML = '';
}

function handleCorrectAnswer() {
		if (currentQuestionIndex === questions.length - 1) {
    		return handleGameOver();
    }
    currentQuestionIndex++;
		resetQuesiton();
     
    displayQuestion();
}

function handleGameOver() {
		countdownEl.innerHTML = '';
		resetQuesiton();
		clearInterval(countdownInterval);
    // Get user's initials
    // Save score (time remaining)
    // Then, call handleResetClick()
}

// function
    // check if value that has been selcted is = to value on answer array
    // if not, time will subtract
    // increase currenQuestionIndex by 1

var questions = [
    {
    		question: "Who invented JavaScript?",
        selections: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
        answer: "Brendan Eich"
    },
    {		
    		question: "Which one of these is a JavaScript package manager?",
        selections: ["Node.js", "TypeScript", "npm"],
        answer: "npm"
    },
    {		
    		question: "Which tool can you use to ensure code quality?",
        selections: ["Angular", "jQuery", "RequireJS", "ESLint"],
        answer: "ESLint"
    },
    {
    		question: "Which built-in method returns the calling string value converted to lower case?",
        selections: ["toLowerCase()", "toLower()", "changeCase(case)", "None of the Abov"],
        answer: "toLowerCase()"
    },
    {
    		question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        selections: ["slice()", "split()", "replace()", "search()"],
        answer: "split()"
    }
]
// event listener call updateCountdown function
document.getElementById("myBtn").addEventListener("click", handleStartClick)
document.getElementById('resetBtn').addEventListener('click', handleResetClick)