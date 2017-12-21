// variable list

//Create a variable to hold boolean value. Did the user select the right answer (true or false)?
var selectRightAnswer = false;

//Create variables to hold number of correct answers and incorrect answers. Display numbers when game is over.
var correctAnswersTally = 0;
var incorrectAnswersTally = 0;

//Create variable to hold count that will keep track of the index of the currently displayed trivia question.
var count = 0;

//Create variable to hold the time to answer a question.
var Timer = 7;
var intervalId;

//Create variable to hold the user's choice/anser
var userChoice;

//Create variable for button so that we can create it using jQuery.
var choiceBtn;


// trivia object with question array
var triviaDeck = {
	triviaArray: [{
    	question:"The modern viola was designed in what country?",
    	options:["Frace","Germnay","Italy","Romania"],
    	answer:"Italy"
  		}, {
  		question:"What clef is viola music primary written?",
    	options:["Bass","Contra-alto","Alto","Treble"],
    	answer:"Alto"
  		}, {
  		question:"Prior to the 20th century, composers preferred violists perform what part of an ensemble?",
    	options:["solo","melody","counter-melody","harmony"],
    	answer:"harmony"
  		}, {
  		question:"What famous guitarist first learned to play music on the viola?",
    	options:["B.B. King","Jimi Hendrix","Eric Clapton","Carlos Santana"],
    	answer:"Jimi Hendrix"
  		}, {
  		question:"What famous Beatles’ song features the viola?",
    	options:["Eleanor Rigby","Yesterday","Strawberry Fields Forever","Love Me Do"],
    	answer:"Eleanor Rigby"
  		}, {
  		question:"Which modern musician plays an electric viola?",
    	options:["Papa John Creach (Jefferson Airplane)","Amy Lee (Evanescence)","Frank Zappa","John Cole (The Velvet Underground)"],
    	answer:"John Cole (The Velvet Underground)"
  		}, {
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

