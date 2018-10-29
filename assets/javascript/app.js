
var questions = [
	{question: "here is question1 and this place holder?", 
  multiChoice: ["a.", "b.", "c.", "d."],
  answer: "a. show correct answer1"},
	
	{question: "here is question2 and this place holder?", 
  multiChoice: ["a.", "b.", "c.", "d."],
	answer: "b. show correct answer2"},
	
	{question: "here is question3 and this place holder?", 
  multiChoice: ["a.", "b.", "c.", "d."],
  answer: "c. show correct answer3"},

	{question: "here is question4 and this place holder?", 
  multiChoice: ["a.", "b.", "c.", "d."],
	answer: "d. show correct answer4"},
	
	{question: "here is question5 and this place holder?", 
  multiChoice: ["a.", "b.", "c.", "d."],
  answer: "b. show correct answer5"},

	{question: "here is question6 and this place holder?", 
  multiChoice: ["a.", "b.", "c.", "d."],
	answer: "b. show correct answer6"},
	
	{question: "here is question7 and this place holder?", 
  multiChoice: ["a.", "b.", "c.", "d."],
	answer: "b. show correct answer7"}];

var timer = 5;


function startGame() {
	intervalId = setInterval(count, 1000);
			for(var i = 0; i < questions.length; i++) {
				$(".question").text(questions[i].question); 
				$(".multiChoiceA").html(questions[i].multiChoice[0]);
				$(".multiChoiceB").html(questions[i].multiChoice[1]);
				$(".multiChoiceC").html(questions[i].multiChoice[2]);
				$(".multiChoiceD").html(questions[i].multiChoice[3]);
				
				$(".choice div").on("click", function () {
					var userClick = $(".choice div").index(this);
					console.log(userClick);
					})

				}
		}
	

	function count() {
		if(timer === 0) {
			clearInterval(intervalId);
			alert("you are out of time. Answer was: ")
			}
			else {
			timer -- ;
			$(".timer").text("Time Remaining: " + timer + " Seconds");  
			}
		}


$("#start").on("click", function() 
{startGame();
});

