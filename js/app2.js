$(document).ready(function() {

	var correctCount = 0;
	var currentQuestion = 0;

	// Quiz Array
	var quizArray = [{
        question: ">Which is not a reason for using catastrophe models?",
        choices: ["Models help us with risk selection and benchmarking", "Models help us satisfy regulatory and investor requirements", "Models are a relatively affordable tools", "Models simulate the expected losses of an account"],
        qNum : 0,
        correct : 2
        },
        {
        question: "How much direct gross net premium do we expect to write this year?",
        choices: ["USD 150 million", "USD 225 million", "USD 400 million", "USD 465 million"],
        qNum : 1,
        correct : 3
        },
        {
        question: "Since inception, how much claims have we incurred in our Bermuda unit?",
        choices: ["USD 50 million", "USD 100 million", "USD 400 million", "USD 850 million"],
        qNum : 2,
        correct : 3
        },
        {
        question: "When did Amlin's Bermuda unit begin operating?",
        choices: ["September 1, 2004", "December 1, 2005", "January 1, 2006", "June 1, 2006"],
        qNum : 3,
        correct : 1
        },
        {
        question: "How do we expect market rates to shift in 2015?",
        choices: ["Up 10%", "Up 5%", "Down 5%", "Down 10%"],
        qNum : 4,
        correct : 3
    }]

	// Starts a new game from scratch
  	newGame();

  	function newGame() {
	  	$("#startButton").on("mouseup", function() {
	  		// If startScreen is visible, proceed to Q#1
	  		if ( $("#startScreen").is(':visible') ) {
		  		$("#startScreen").fadeOut(500, function() {
		  			$("#question1").fadeIn(500);
	  		}); 
		  	// If startScreen is not visible, hide current question, show start screen and proceed to Q#1
	  		} else {
	  			for(var i = 1; i <= 5; i++) {
		  			$("#question"+[i]).hide();
	  			};
	  			$("#startScreen").fadeIn(2000, function() {
	  			$("#startScreen").fadeOut(500, function() {
	  				$("#question1").fadeIn(500);
	  			});  			
	  		}); 
	  		};
	  	});
  	}


});