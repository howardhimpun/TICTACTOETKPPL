var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;

window.onload=function(){

	painted = new Array();
	content = new Array();
	winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	for(var l = 0; l <= 8; l++){
		painted[l] = false;
		content[l]='';
	}
}

function canvasClicked(canvasNumber){
	theCanvas = "canvas"+canvasNumber;
	c = document.getElementById(theCanvas);
	cxt = c.getContext("2d");

	if(painted[canvasNumber-1] ==false){
		if(turn%2==0){
			cxt.beginPath();
			cxt.translate(45,-20);
			cxt.moveTo(40,40);
			cxt.lineTo(160,160);
			cxt.moveTo(160,40);
			cxt.lineTo(40,160);
			cxt.scale(10,10);
			cxt.strokeStyle = "blue";
			cxt.stroke();
			cxt.closePath();
			content[canvasNumber-1] = 'X';
		}else{
			cxt.beginPath();
			cxt.translate(45,0);
			cxt.arc(100,75,60,0,Math.PI*2,true);
			cxt.strokeStyle = "red";
			cxt.lineWidth = 10;
			cxt.stroke();
			cxt.closePath();
			content[canvasNumber-1] = 'O';
		}

	turn++;
	painted[canvasNumber-1] = true;
	squaresFilled++;
	checkForWinners(content[canvasNumber-1]);

	if(squaresFilled==9){
		alert("GAME OVER!");
		location.reload(true);
	}

	}else{
		alert("SUDAH TERISI!");
	}

}

function checkForWinners(symbol){
	for(var a = 0; a < winningCombinations.length; a++){
		if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==	symbol&&content[winningCombinations[a][2]]==symbol){
			alert(symbol+ " WON!");
			playAgain();
		}
	}
}

function playAgain(){
	y=confirm("PLAY AGAIN?");
	if(y==true){
		alert("OKAY! ^^/>");
		location.reload(true);
	}else{
		alert("BYE BYE!");
		location.reload(true);
	}
}