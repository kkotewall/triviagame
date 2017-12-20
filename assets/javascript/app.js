// variable list


// trivia object with question arrays
var trivia = [ {
    "question":"question 1?",
    "options":["A","B","C","D"],
    "answer":"B"
  }, {
    "question":"question 2?",
    "options":["A","B","C","D"],
    "answer":"B"
  }, {
    "question":"question 3?",
    "options":["A","B","C","D"],
    "answer":"B"
  	} 
  ];



function userGuess(result) {
// wins counter
	// question: how to cause correct.html to load
  if (guess === answer) {
    wins++;
    $("#win-lose").html("<h2>Winner!</h2>");
  }

// loss counter
    // question: how to cause incorrect.html to load
  else if (guess !== answer) {
    losses++;
    $("#win-lose").html("<h2>Loser!</h2>");
  }

// unanswered counter
	//question: how to load time.html
else (guess === null) {
    losses++;
    $("#win-lose").html("<h2>Time's Up!</h2>");
  }
};


// timer settings
setTimer(threeSeconds, 1000 * 3);
var flashTimer = setTimeout(functionName, 15);


// game timer: displayed



// interval timer: not displayed


// start game button
function gameStart {
	clearTimeout (var guessTimer);
	setTimeout ();
	if (triviaIndex < triviaArray.length) {continueGame()}
	else {gameSummary()}

};


// restart game button

