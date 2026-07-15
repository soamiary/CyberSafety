function checkQuiz(){

let score = 0;


let answers = document.querySelectorAll("input[type='radio']:checked");


answers.forEach(function(answer){

score += Number(answer.value);

});


let result = document.getElementById("quizResult");


if(score == 4){

result.innerHTML = "Excellent! You have great cybersecurity knowledge.";

}

else if(score >= 2){

result.innerHTML = "Good job! Keep learning about cyber safety.";

}

else{

result.innerHTML = "You should learn more about staying safe online.";

}


}