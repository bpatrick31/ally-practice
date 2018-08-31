// set the score values and initial question to be zero
let questionNumber = 0;
let htmlScore = 0;
let cssScore = 0;
let jsScore = 0;
let totalScore = 0;
let progressValue = 10;
let correctAnswerIndex = 0;
let passingScore = false;
let questionsRight = 0;


//start the Quiz

function startQuiz() {
    $('.quiz-btn-container').on('click', '.start-quiz-btn', function () {
        //remove the start menu
        $('#start-menu').remove();
        //change the display property of the question container to be inherit;
        $('.question-page').css('display', 'inherit');

    });

}


//Generate the question to the DOM
function generateQuestion() {
    //check to see if the question number is less than the length of the questions
    if (questionNumber < QUESTIONS.length) {

        //return the top section of the div before the for loop
        let formHeader =
            `<div class="row">
            <form action="" role="form" id="question-form">
            <fieldset>
                <legend>
                    <h1 class="question-title">Question #<span>${QUESTIONS[questionNumber].number}</span></h1>
                    <h2 class="question-detail">${QUESTIONS[questionNumber].question}</h2></legend>
            `;

        //empty string to store the for loop
        let questionLabel = '';

        //loop through the answers length and pass in the index value
        for (let i = 0; i < `${QUESTIONS[questionNumber].answers.length}`; i++) {

            questionLabel += `<label class="question-label">
            <input type="radio" value="${i}" name="answer" required>
            <span class="radio-btn">${QUESTIONS[questionNumber].answers[i].answerLetter}</span>
            <span id="answer-a">${QUESTIONS[questionNumber].answers[i].answerDescription}</span>
        </label>`;
        }

        //add in the submit button and closing tags
        let closingTags =
            ` <button type="submit" role="button" class="question-submit">Submit</button>
         </fieldset>
     </form>
 </div>`;

        //return the concatenated string
        return formHeader + questionLabel + closingTags;


    } else {
        //show the results page
        summaryPage();
        //add the total score
        addTotalScore();
        //check if they passed
        checkPassingScore();
        //show the passing results page
        passingResults();
        //allow them to restart the quiz
        restartButton();
    }
}

//Render the first question to the DOM

function renderQuestion() {

    $('.question-container').html(generateQuestion());

}


//Check the users input and see if they got the correct answer
function userAnswer() {
    $('form').on('submit', function (event) {
        //remove browser defaults for submitting the form
        event.preventDefault();
        scoresContainerColor();

        //check which value is selected
        let selectedAnswer = $('input:checked').val();
        let correctAnswerDescription = `${QUESTIONS[questionNumber].correctIndex}`;

        //grab the correct index value from the questions object
        correctAnswerIndex = `${QUESTIONS[questionNumber].correctIndex}`;
        //check if the user got the answer right
        if (selectedAnswer === correctAnswerDescription) {
            answerIsCorrect();

        } else {
            answerIsWrong();
        }
        //change the button to be the next button
        $('.question-submit').remove();
        addNextButton();
        //increment the question number
        questionNumber++;

    });
}

//add the next button after the user submits their answer
function addNextButton() {
    $('<button type="submit" class="question-next">Next</button>').insertAfter('#question-form');
}


//Update the dom if the answer is correct
function answerIsCorrect() {
    //add a class to the selected div
    $('input:checked').parent().addClass('correct-answer');
    //add the div after the correct answer
    $(`<div class="answer-container"><p>${QUESTIONS[questionNumber].answers[correctAnswerIndex].response}</p></div>`).insertAfter('.correct-answer');

    //increment the number of questions they got right
    questionsRight += 1;
    

    $('.total-score-result').text(questionsRight);

    //add points to the score board
    if (`${QUESTIONS[questionNumber].questionType}` === 'html') {
        htmlScore += 10;
        $('#html-score').html(`${htmlScore}<div class="score-total-points">out of 30</div>`)

    } else if (`${QUESTIONS[questionNumber].questionType}` === 'css') {
        cssScore += 10;
        $('#css-score').html(`${cssScore}<div class="score-total-points">out of 30</div>`)

    } else if (`${QUESTIONS[questionNumber].questionType}` === 'js') {
        jsScore += 10;
        $('#js-score').html(`${jsScore}<div class="score-total-points">out of 40</div>`)
    }
}


//function if the answer selects the wrong answer
function answerIsWrong() {
    $('input:checked').parent().addClass('wrong-answer');
    $('input:checked ~ .radio-btn').css('background-color', 'red');
    let selectedAnswer = $('input:checked').val();
    $(`<div class="answer-container"><p>${QUESTIONS[questionNumber].answers[selectedAnswer].response}</p></div>`).insertAfter('.wrong-answer');
    $('.answer-container').css('background-color', 'red');

}

//UPDATE PROGRESS BAR
function updateProgressBar() {
    progressValue += 10;
    $('progress').attr('value', progressValue);

}

//NEXT QUESTION
function nextQuestion() {
    $('.question-container').on('click', '.question-next', function (event) {

        //change the question
        renderQuestion();
        userAnswer();
        updateProgressBar();

    });
}


//loop through the scores array and change the color if its active
function scoresContainerColor () {
        if (questionNumber < 2) {
            $('.html-score-container').css("box-shadow", "0px 1px 2px #55a32a");
        } else if (questionNumber < 5 && questionNumber >=2) {
            $('.css-score-container').css("box-shadow", "0px 1px 2px #55a32a");
        } else if (questionNumber < 8 && questionNumber >=5) {
            $('.js-score-container').css('box-shadow', '0px 1px 2px #55a32a');
        }
}



//add the total score together
function addTotalScore() {
    totalScore = htmlScore + cssScore + jsScore;
    return totalScore;
}


//Check which scores the user passed
function checkPassingScore () {
    if (totalScore >= 70) {
        passingScore = true;
    } else {
        passingScore = false;
    }
}


function passingResults () {
    if (passingScore === true) {

        //return dynamic html if the user passes
       resultsPage = `
        <div class="row">
            <div class="col-12 passed">
                <img class="results-gif" src="${RESULTS[0].gifImage}" alt="${RESULTS[0].gifAlt}">
                <div class="results-title">
                    ${RESULTS[0].resultsTitle}
                </div>
                <div class="results-description">
                    <p class="result-message">${RESULTS[0].resultsDescription}</p>
                    <p class="result-suggestion">${RESULTS[0].resultsSuggestion}</p>
                </div>
            </div>
        </div>`;

    } else {

    //html that is returned if the user did not pass
      resultsPage = `
        <div class="row">
            <div class="col-12 passed">
                <img class="results-gif" src="${RESULTS[1].gifImage}" alt="${RESULTS[1].gifAlt}">
                <div class="results-title">
                    ${RESULTS[1].resultsTitle}
                </div>
                <div class="results-description">
                    <p class="result-message">${RESULTS[1].resultsDescription}</p>
                    <p class="result-suggestion">${RESULTS[1].resultsSuggestion}</p>
                </div>
            </div>
        </div>`;
  
    }

    return $('.summary-page').html(resultsPage);
}



//Function to move to to the summary page
function summaryPage () {

    $('.summary-page').show();
    $('.scores-section').hide();
    $('.question-final').hide();

}

//function to restart the quiz
function restartButton () {
    $('<div class="row"><div class="restart-container col-12"><button class="restart-button">Restart Quiz</button></div></div>').insertAfter('.scores');
    
    $('.restart-container').on('click', '.restart-button', function () {
        
        location.reload();
        
    });
}



//Create the quiz when the page loads

function createQuiz() {
    startQuiz();
    renderQuestion();
    userAnswer();
    nextQuestion();
}

$(createQuiz);
