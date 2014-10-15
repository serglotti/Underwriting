$(document).ready(function() {

	var currentQuestion = 0;
	var correctCount = 0;
	var newScore = 0;

	// Starts a new game from scratch
  	newGame();

	quizQuestion(1);


  	function newGame() {
	  	$("#startButton").on("mouseup", function() {
	  		// If startScreen is visible, proceed to Q#1
	  		if ( $("#startScreen").is(':visible') ) {
		  		$("#startScreen").fadeOut(500, function() {
		  			$("#q1").fadeIn(500);
	  		}); 
		  	// If startScreen is not visible, hide current question, show start screen and proceed to Q#1
	  		} else {
	  			for(var i = 1; i <= 5; i++) {
		  			$("#q"+i).hide();
	  			};
	  			$("#startScreen").fadeIn(2000, function() {
	  			$("#startScreen").fadeOut(500, function() {
	  				$("#q1").fadeIn(500);
	  			});  			
	  		}); 
	  		};
	  	});
  	};

  	function quizQuestion(j) {

		$("#questionAnswer li").on("mouseup", function() {
			if ($(this).hasClass("win")) {
				$(".correct").show();
				// updateScore();
				$(".correct").fadeOut(2000, function() {
				$("#q"+j).hide();
				$("#q"+(j+1)).show();
				});  			
			} else {
				$(".incorrect").show();
				$(".incorrect").fadeOut(2000, function() {
				$("#q"+j).hide();
				$("#q"+(j+1)).show();	
				});
			}
		
		return quizQuestion(j+1);

  		})
  	};

	/* Function to update score in the footerScore element*/
	// function updateScore() {
	// 	correctCount++;
	// 	$("#footerScore p").remove();
	// 	$("#footerScore").append("<p>Score: " + correctCount + " out of 5</p>");
	// }
});