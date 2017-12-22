// TO DO: start game screen
// create start button and append to div
//style start button.
//Hide trivia question div
//Hide answer div
//capture click event from start button to run game play function

window.onload = function() {

//score
var correctScore = 0;
var incorrectScore = 0;

//trivia question index
var index = 0;

//timer
var timer;
var intervalId;

//user selection
var userOption;


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
  		}
  ]};

//display trivia question
function startGame() {
	
	//TO DO: hide start page divs

    //to loop through all possible answers, puts them into buttons and append them to the browser
    for (var i=0; i<triviaDeck.triviaArray[index].options.length; i++) {
    	var optionBtn = $("<button>");
    	//optionBtn style
    	optionBtn.attr("data-guess", triviaDeck.triviaArray[index].options[i]);
    	optionBtn.text(triviaDeck.triviaArray[index].options[i]);
    	$(".questionDisplay").append(optionBtn);
    	//console.log(triviaDeck.triviaArray[index].options[i]);
    };

    //start timer
    countdown();
}


//timer runs out during game play
function countdown() {
	  timer = 15;
	  intervalId = setInterval(decrement, 1000);
	  $(".timer").html("Time remaining: " + timer);
      //when timer runs out, stop game play and alert user
      if (timer === 0) {
        clearInterval(intervalId);
        $("#timerDisplay").hide();
        $("#questionDisplay").hide();
        $("#timeOver").show().html("<h2>" + "Time's up!" + "</h2>").append;
        setTimeout(advanceGame, 1000 * 3);
      }
}


//continue game if all trivia has not been asked
function  advanceGame() {	
	// end game after all trivia asked
	if (index === triviaDeck.triviaArray.length) {
		gameSummary();
	}
	else {
		index++
		startGame();
	}
}


//user game play
startGame();

//on-click event
$(".questionDisplay").on("click", ".option", function(choice) {

	//grab the value of button clicked and give it the name answerCheck
	var userOption = $(this).text();
	//console.log(userOption);

	//user has correct answer
	//update counter
	if (userOption === triviaDeck.triviaArray.[index].answer) {
		correctScore++
		$(".correctAnswer").html("That is the correct answer!");
		clearInterval(intervalId);
        $("#timerDisplay").hide();
        $("#questionDisplay").hide();
        index++
        setTimeout(advanceGame, 1000 * 3);
	}

	//user has incorrect answer
	//update counter
	else {
		incorrectScore++
		$(".incorrectAnswer").html("Wrong answer!");
		clearInterval(intervalId);
        $("#timerDisplay").hide();
        $("#questionDisplay").hide();
        index++
        setTimeout(advanceGame, 1000 * 3);
	}
}

} // window.onload
