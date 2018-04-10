var p1Button = document.queryselector("#p1");
var p2Button = document.getElementById("p2");
var p3Button = document.getElementById("p3");
var p1Dissplay = document.queryselector("#p1Dissplay");
var p2Dissplay = document.queryselector("#p2Dissplay");
var numInput = document.queryselector("input");
var winningScoreDisplay = document.queryselector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if (p1Score === winningScore) {
			p1Dissplay.classList.add("winner");
			gameOver = true;
		}
		p1Dissplay.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if (p2Score === winningScore) {
			p2Dissplay.classList.add("winner");
			gameOver = true;
		}
		p2Dissplay.textContent = p2Score;
	}
});

p3Button.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

function reset(){
	p1Score = 0;
    p2Score = 0;
    p1Dissplay.textContent = 0;
    p2Dissplay.textContent = 0;
    p1Dissplay.classList.remove("winner");
    p2Dissplay.classList.remove("winner");
    gameOver = false;
}