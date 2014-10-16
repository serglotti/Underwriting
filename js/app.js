$(document).ready(function() {

	var currentQuestion = 0;
	var correctCount = 0;
	var newScore = 0;

	// Starts a new game from scratch
  	newGame();

	quizQuestion();


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

  	function quizQuestion() {

		$("#questionAnswer li").each(function(index, element){
			var $element = $(element);
			var $parent = $element.parent().parent();
			var $next = $("#q" + (parseInt($parent[0].id.split("q")[1])+1));

			$element.on("click", function() {
				if ($(this).hasClass("win")) {
					$(".correct").show();
					updateScore();
					$(".correct").fadeOut(2000, function() {
						$parent.hide();
						$next.show();
					});  			
				} else {
					$(".incorrect").show();
					$(".incorrect").fadeOut(2000, function() {
						$parent.hide();
						$next.show();
					});
				}
	  		})
		});
		
  	};

	/* Function to update score in the footerScore element*/
	function updateScore() {
		correctCount++;
		$("#footerScore p").remove();
		$("#footerScore").append("<p>Score: " + correctCount + " out of 5</p>");
	}

});