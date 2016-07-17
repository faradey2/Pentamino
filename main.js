var field = document.querySelector("#field");
field.width = 20;
field.height = 30;
var ScoreBoard = document.querySelector("#score");

var mainPentamino ;
var pull = [];
const MOVE_DOWN_TICKS = 5;
var tick = 0;
var prTimer;
var score;
const types = ['1','2','3','4','5','6','7','8','9','F','I','L','N','P','T','U','V','W','X','Y','Z'];

var commandBuffer = [];

function startGame(){
	mainPentamino = createNewPentamino(); 
	prTimer = setInterval(process,75);
	draw();
	score = 0;
	pull = [];
	document.querySelector("#GameOver").style.display = "none";
}

function gameOver(){
	clearInterval(prTimer);
	console.log('Game Over');
	document.querySelector("#GameOver").style.display = "inline-block";
}

function process(){
	commandBufferProcessing();
	
	if(--tick < 0){
		if(!checkMoveDown()){
			if(mainPentamino.y<=0)
				gameOver();
			else{
				for(var i = 0 ; i< mainPentamino.cells.length;i++){
					var cell = mainPentamino.cells[i];
					cell.x += mainPentamino.x;
					cell.y += mainPentamino.y;
					pull.push(cell);
					drawCell(cell,cell.x,cell.y);
				}
				mainPentamino = createNewPentamino();
			}
		}

		checkFullLine();
		mainPentamino.y++;
		tick = MOVE_DOWN_TICKS;
		ScoreBoard.innerHTML = score;
	}


	draw();

}

function commandBufferProcessing(){
	if(commandBuffer.length == 0) return;
	
	if(commandBuffer[0] == 'left' && checkMoveLeft())
		mainPentamino.x--;
	else if(commandBuffer[0] == 'right' && checkMoveRight())
		mainPentamino.x++;
	else if(commandBuffer[0] == 'down')
		while(checkMoveDown())
			mainPentamino.y++;
	else if(commandBuffer[0] == 'rotate')
		rotate();
	commandBuffer.shift();


}



function draw(){
	for(var i = 0 ; i < mainPentamino.cells.length;i++){
		var cell = mainPentamino.cells[i];
		if(cell.y + mainPentamino.y >= 0)
			drawCell(cell, mainPentamino.x + cell.x,mainPentamino.y + cell.y);
	}
}

function drawCell(cell,posX,posY) {
	if(posX == undefined) posX = cell.x;
	if(posY==undefined) posY = cell.y
	var x = posX*cell.offsetWidth;
	var y = posY*cell.offsetHeight;
	cell.style.left = x + 'px';
	cell.style.top = y + 'px';
}

function createNewPentamino(){
	mainPentamino = createPentamino(types[Math.floor(Math.random()*types.length)]);
	// mainPentamino = createPentamino('X');
	if(Math.random()<0.5)	reflection();
	return mainPentamino; 
}

function checkFullLine(){
	var cnt = 0;
	for(var i = 0 ; i < field.height;i++){
		cnt = 0;
		for(var j = 0; j < pull.length;j++)
			if(pull[j].y == field.height-1-i)
				cnt++;
		if(cnt == field.width){
			for(var j = 0; j < pull.length;j++)
				if(pull[j].y == field.height-1-i)
				{
					field.removeChild(pull[j]);
					pull.splice(j--,1)
				}
				else if(pull[j].y<field.height-1-i){
					pull[j].y++;
					drawCell(pull[j]);
				}
			score++;
			i--;
		}
	}
}

function restart(){
	clearInterval(prTimer);
	for(var j = 0; j < pull.length;j++)
		field.removeChild(pull[j]);
	for(var j = 0; j < mainPentamino.cells.length;j++)
		field.removeChild(mainPentamino.cells[j]);
	startGame();
}

startGame();

addEventListener("keydown",function(e){
	if(commandBuffer.length > 0) return;
	if(e.keyCode==37) commandBuffer.push('left');
	if(e.keyCode==38) commandBuffer.push('rotate');
	if(e.keyCode==39) commandBuffer.push('right');
	if(e.keyCode==40) commandBuffer.push('down');
	if(e.keyCode==82) restart();
})

document.querySelector("#restart").addEventListener("click",restart);