
var timer = 10;
var win = 0;
var losses = 0;

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
	
console.log(questions[1].question)
$(".question").text(questions[1].question); 
$(".multiChoiceA").html(questions[1].multiChoice[0]);
$(".multiChoiceB").html(questions[1].multiChoice[1]);
$(".multiChoiceC").html(questions[1].multiChoice[2]);
$(".multiChoiceD").html(questions[1].multiChoice[3]);



function startGame() {
	for(var i = 0; i < questions.length; i++) {
		$(".question").text(questions[i].question); 
		$(".multiChoiceA").html("multiChoice[i]");
		$(".multiChoiceA").html("multiChoice[i]");
		$(".multiChoiceA").html("multiChoice[i]");
		$(".multiChoiceA").html("multiChoice[i]");
	}




}


//$(".question").text([question]);

