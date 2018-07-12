var colorSquares = 11;
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var box10 = document.getElementById("box10");
var check1 = document.getElementById("firstQuestion");
var check2 = document.getElementById("secondQuestion");
var check3 = document.getElementById("thirdQuestion");

var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10];
var boxVal = [box1.innerHTML, box2.innerHTML, box3.innerHTML, box4.innerHTML, box5.innerHTML,
		      box6.innerHTML, box7.innerHTML, box8.innerHTML, box9.innerHTML, box10.innerHTML];


//START&RESET BUTTON//
startButton.addEventListener("click", startGame)

function startGame(){
	if(box1.innerHTML) {
		for(var i = 0; i < boxes.length; i++) {
			boxes[i].innerHTML = Number(Math.floor((Math.random() * 10) + 1));
			boxVal[i] = Number(boxes[i].innerHTML);
		}
	}
	setTimeout(resetGame, 3000);
};

function resetGame(){
if(box1.innerHTML <= colorSquares) {
		for(var i = 0; i < boxes.length; i++) {
			boxes[i].innerHTML = "#";
		}
	} 
};

//CHECK BUTTONS//
checkButton1.addEventListener("click", function() {
	if(Number(check1.value) === boxVal[0] + boxVal[8]) {
		alert("Correct!");
	} else {
		alert("Incorrect - please try again!");
	}
	check1.value = "";
});

checkButton2.addEventListener("click", function() {
	if(Number(check2.value) === boxVal[1] - boxVal[2]) {
		alert("Correct!");
	} else {
		alert("Incorrect - please try again!");
	}
	check2.value = "";
});

checkButton3.addEventListener("click", function() {
	if(Number(check3.value) === boxVal[7] * boxVal[9]) {
		alert("Correct!");
	} else {
		alert("Incorrect - please try again!");
	}
	check3.value = "";
});
