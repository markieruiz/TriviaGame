$(document).ready(function (event) {

var questions = [
	{question: "here is question1 and this place holder?", 
  multiChoice: ["a.", "b.", "c.", "d."],
  answer: 0},
	
	{question: "here is question2 and this place holder?", 
  multiChoice: ["a.choiceA", "b.choiceB", "c.ChooseMe", "d.I am wrong"],
	answer: 0},
	
	{question: "here is question3 and this place holder?", 
  multiChoice: ["a.choiceA", "b.choiceB", "c.ChooseMe", "d.I am wrong"],
  answer: 1},

	{question: "here is question4 and this place holder?", 
  multiChoice: ["a.choiceA", "b.choiceB", "c.ChooseMe", "d.I am wrong"],
	answer: 2},
	
	{question: "here is question5 and this place holder?", 
  multiChoice: ["a.choiceA", "b.choiceB", "c.ChooseMe", "d.I am wrong"],
  answer: 3},

	{question: "here is question6 and this place holder?", 
  multiChoice: ["a.choiceA", "b.choiceB", "c.ChooseMe", "d.I am wrong"],
	answer: 4},
	
	{question: "here is question7 and this place holder?", 
  multiChoice: ["a.choiceA", "b.choiceB", "c.ChooseMe", "d.I am wrong"],
	answer: 1}];

var i = 0;
var wins = 0;
var losses = 0;

function startGame() {
		
	if (i < questions.length) {
		timer = 15;
		intervalId = setInterval(count, 1000);
		$(".timer").text("Time Remaining: " + timer + " Seconds");  
		

		$(".question").text(questions[i].question); 
		$(".multiChoiceA").html(questions[i].multiChoice[0]);
		$(".multiChoiceB").html(questions[i].multiChoice[1]);
		$(".multiChoiceC").html(questions[i].multiChoice[2]);
		$(".multiChoiceD").html(questions[i].multiChoice[3]);
				
		$(".choice div").on("click", function () {
			var userClick = $(".choice div").index(this);

				if(userClick === questions[i].answer) {
					//alert("you won show the screen here")
					wins++
					clearInterval(intervalId);
					i++;
					userClick="";
					setTimeout(startGame, 5000); 
					
				}
				else {
					//alert("you lost show the screen here")
					losses++
					clearInterval(intervalId);
					i++;
					userClick="";
					setTimeout(startGame, 5000); 
				}

			console.log(userClick);
			console.log("wins" + wins);
			console.log("losses" + losses);
			console.log("this one:" + i);

			});

		}
	else {
		if (i = questions.length) {
			wins = 0 ;
			losses = 0;
			i = 0;
			clearInterval(intervalId); 
			setTimeout(startGame, 5000);

		}
	}
	
	}

	function count() {
		if (timer === 0) {
			clearInterval(intervalId);
			$(".timer").text("Time Remaining: " + 0 + " Seconds"); 
			userClick="";
			losses++;
			i++;
			console.log(wins);
			console.log(losses);
			console.log(i);
			setTimeout(startGame, 5000); 
			console.log("you are out of time. Answer was: ");
			}
			else {
			timer -- ;
			$(".timer").text("Time Remaining: " + timer + " Seconds");  
			
			}
		}


$("#start").on("click", function() 
{startGame();
});

});
