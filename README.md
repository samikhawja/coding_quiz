# Coding Quiz

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#code-snippet">Code-Snippet</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="./assets/images/webpage.png" alt="Quiz Webpage">

For this assignment, I had to create a coding quiz from scratch. Nothing was provided, so this was a true test to my knowledge and what I've learned so far. For this quiz, it is timed with a penality for every incorrect answer. Results are shown afterwards and you can reset the quiz to take it again. Of course, making this quiz wasn't easy. It tested my previous knowledge and I was constantly researching to ensure I had the best quiz I could deliver to the user!

The websites I used to help create my generator are listed below in the <a href="#acknowledgements">acknowledgements</a>.

### Built With

I used <a href="https://code.visualstudio.com/">Visual Studio Code</a> to create the HTML, CSS and Javascript from scratch.


<!-- GETTING STARTED -->
## Getting Started

To start the quiz, there will be a start button, when clicked, will initiate the the timer and the first question will appear. You can go to the next problem by pressing the 'next button' and restart the quiz with the 'restart button'.


<!-- USAGE EXAMPLES -->
## Code Snippet

While coding this generator, this piece of code / function proved to be the hardest to figure out. I had to create a function that would display the question then display the next question after the right answer was selected. I had to use event listeners, text content and many more just to display a question! This part of the javascript wasn't easy but it was fun because of the challenge.
```
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
}
```



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Sami Khawja - Skhawja11@gmail.com

Project Link: [GitHub](https://github.com/samikhawja/coding_quiz)

Live Link: [Password Generator](https://samikhawja.github.io/coding_quiz/)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* Taylor Hackbart
* [W3Schools](https://www.w3schools.com/)
* [StackOverflow](https://stackoverflow.com/)
* [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)