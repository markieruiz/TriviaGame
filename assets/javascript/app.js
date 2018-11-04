$(document).ready(function (event) {

	var q0 = {
		question: "Dorothy has two siblings. What is her brothers name?",
		answerChoices: ["Stan", "Salvador", "Lars", "Phil"],
		answer: "Phil",

	}
	var q1 = {
		question: "How many seasons did the Golden Girls span?",
		answerChoices: ["8", "10", "7", "12"],
		answer: "7",

	}
	var q2 = {
		question: "Who has a blind sibling?",
		answerChoices: ["Sophia", "Rose", "Blanche", "Dorothy"],
		answer: "Rose",

	}
	var q3 = {
		question: "How many years were Dorothy and Stan married?",
		answerChoices: ["38", "32", "43", "25"],
		answer: "38",

	}
	var q4 = {
		question: "What are Blanche's initials?",
		answerChoices: ["B.A.D.", "B.E.D.", "B.L.R.", "B.H.R."],
		answer: "B.E.D.",
	}

	var timeLeft = 10;
	var losses = 0;
	var wins = 0;
	var number = 0;
	var myMusic = ("thegoldengirlsshort.wav");

	var questions = [q0.question, q1.question, q2.question, q3.question, q4.question];
	var answerOptions = [q0.answerChoices, q1.answerChoices, q2.answerChoices, q3.answerChoices, q4.answerChoices];
	var answers = [q0.answer, q1.answer, q2.answer, q3.answer, q4.answer]

	function winPage() {
		
		$(".screen").prepend('<img id="win" src="assets/images/Screen Shot 2018-10-28 at 2.42.56 PM.png"/>')
		$(".timer").text("");
	}

	function losePage() {
		$(".timer").text("");
		$(".screen").prepend('<img id="lose" src="assets/images/Screen Shot 2018-11-02 at 9.13.38 PM.png"/>')
	}

	function endPage() {
		$(".screen").empty();
		$(".timer").text("");
		$(".screen").prepend('<img id="end" src="assets/images/Screen Shot 2018-10-28 at 2.49.45 PM.png"The END!/>')
		$.stopSound("Jeopardy-theme-song.mp3");
	}

	var replaceOptions = "<div class='row'>"
		"<p>Answer Choices</p>"
		"</div>"
		"<div class='row choice1'></div>"
		"<div class='row choice2'></div>"
		"<div class='row choice3'></div>"
		"<div class='row choice4'></div>"

	function countdown() {
		if (timeLeft === 0) {
			clearInterval(intervalId);
			$(".timer").text("Time Remaining: " + 0 + " Seconds");
			$(".results").text("Times Up! The correct answer is: " + answers[number]);
			losePage();
			losses++;
			number++;
			setTimeout(game, 3000);
		}
		else {
			timeLeft--;
			$(".timer").text("Time Remaining: " + timeLeft + " Seconds");

		}
	}

	function game() {
		if (number < questions.length) {
			timeLeft = 10;
			$(".results").text("");
			$(".screen").html(replaceOptions);
			$(".timer").text("Time Remaining: " + timeLeft + " Seconds");
			intervalId = setInterval(countdown, 1000);
			$(".question").text(questions[number]);
			$(".choice1").html("<button class='buttons button1' value=" + answerOptions[number][0] + ">" + answerOptions[number][0] + "</button>");
			$(".choice2").html("<button class='buttons button2' value=" + answerOptions[number][1] + ">" + answerOptions[number][1] + "</button>");
			$(".choice3").html("<button class='buttons button3' value=" + answerOptions[number][2] + ">" + answerOptions[number][2] + "</button>");
			$(".choice4").html("<button class='buttons button4' value=" + answerOptions[number][3] + ">" + answerOptions[number][3] + "</button>");

			$(".buttons").on("click", function () {
				$.playSound("http://www.noiseaddicts.com/samples_1w72b820/3740.mp3");
				var userClick = $(this).attr("value");

				if (userClick === answers[number]) {
					$(".results").text("CORRECT! The answer is: " + answers[number]);
					wins++;
					clearInterval(intervalId);
					winPage();
					number++;
					setTimeout(game, 3000);

				}
				else {
					$(".results").text("Wrong! The correct answer is: " + answers[number]);
					losses++;
					clearInterval(intervalId);
					losePage();
					number++;
					setTimeout(game, 3000);

				}
			});

		}
		else {
			$.stopSound("Jeopardy-theme-song.mp3");
			$.playSound("thegoldengirlsshort.wav");
			clearInterval(intervalId);
			endPage();
			$(".results").text("Game Over! Press Restart to Play Again!");
			$(".question").text("");
			$(".correct").text("Wins: " + wins);
			$(".incorrect").text("Losses: " + losses);
			$(".buttons").remove();
			$(".timer").text("");
			$(".restart").show();
		}
	}

	function reset() {
		$(".restart").hide();
		losses = 0;
		$(".incorrect").text("");
		wins = 0;
		$(".correct").text("");
		number = 0;
		game();
	}

	$(".restart").hide();

	$(".start").on("click", function () {
		$(this).hide();
		$.playSound("Jeopardy-theme-song.mp3");
		game();
	});

	$(".restart").on("click", function () {
		$.stopSound("thegoldengirlsshort.wav");
		$.playSound("Jeopardy-theme-song.mp3");
		reset();
	});

}); 
