

function createPentamino(type) {

	var cell1 = document.createElement('div');
	cell1.className = "cell";
	field.appendChild(cell1)

	var cell2 = document.createElement('div');
	cell2.className = "cell";
	field.appendChild(cell2)

	var cell3 = document.createElement('div');
	cell3.className = "cell";
	field.appendChild(cell3)

	var cell4 = document.createElement('div');
	cell4.className = "cell";
	field.appendChild(cell4)

	var cell5 = document.createElement('div');
	cell5.className = "cell";
	field.appendChild(cell5);
	
	var pentamino = {
		x: 0,
		y: 0,
		cells : [] 
	}
	pentamino.type = type;

	if(type == 'F'){
		cell1.x = 0;		cell1.y = 1;
		cell2.x = 1;		cell2.y = 2;
		cell3.x = 1;		cell3.y = 1;	
		cell4.x = 1;		cell4.y = 0;
		cell5.x = 2;		cell5.y = 0;

		pentamino.width = 3;
		pentamino.height = 3;
	}
	else if(type == 'I'){
		cell1.x = 0;		cell1.y = 0;
		cell2.x = 0;		cell2.y = 1;
		cell3.x = 0;		cell3.y = 2;	
		cell4.x = 0;		cell4.y = 3;
		cell5.x = 0;		cell5.y = 4;

		pentamino.width = 1;
		pentamino.height = 5;
	}
	else if(type == 'L'){
		cell1.x = 0;		cell1.y = 0;
		cell2.x = 0;		cell2.y = 1;
		cell3.x = 0;		cell3.y = 2;	
		cell4.x = 0;		cell4.y = 3;
		cell5.x = 1;		cell5.y = 3;

		pentamino.width = 2;
		pentamino.height = 4;
	}
	else if(type == 'N'){
		cell1.x = 0;		cell1.y = 0;
		cell2.x = 0;		cell2.y = 1;
		cell3.x = 0;		cell3.y = 2;	
		cell4.x = 1;		cell4.y = 2;
		cell5.x = 1;		cell5.y = 3;

		pentamino.width = 2;
		pentamino.height = 4;
	}
	else if(type == 'P'){
		cell1.x = 0;		cell1.y = 0;
		cell2.x = 0;		cell2.y = 1;
		cell3.x = 0;		cell3.y = 2;	
		cell4.x = 1;		cell4.y = 0;
		cell5.x = 1;		cell5.y = 1;

		pentamino.width = 2;
		pentamino.height = 3;
	}
	else if(type == 'T'){
		cell1.x = 0;		cell1.y = 0;
		cell2.x = 1;		cell2.y = 0;
		cell3.x = 1;		cell3.y = 1;	
		cell4.x = 1;		cell4.y = 2;
		cell5.x = 2;		cell5.y = 0;

		pentamino.width = 3;
		pentamino.height = 3;
	}
	else if(type == 'U'){
		cell1.x = 0;		cell1.y = 0;
		cell2.x = 0;		cell2.y = 1;
		cell3.x = 1;		cell3.y = 1;	
		cell4.x = 2;		cell4.y = 0;
		cell5.x = 2;		cell5.y = 1;

		pentamino.width = 3;
		pentamino.height = 2;
	}
	else if(type == 'V'){
		cell1.x = 0;		cell1.y = 0;
		cell2.x = 0;		cell2.y = 1;
		cell3.x = 0;		cell3.y = 2;	
		cell4.x = 1;		cell4.y = 2;
		cell5.x = 2;		cell5.y = 2;

		pentamino.width = 3;
		pentamino.height = 3;
	}
	else if(type == 'W'){
		cell1.x = 0;		cell1.y = 0;
		cell2.x = 0;		cell2.y = 1;
		cell3.x = 1;		cell3.y = 1;	
		cell4.x = 1;		cell4.y = 2;
		cell5.x = 2;		cell5.y = 2;

		pentamino.width = 3;
		pentamino.height = 3;
	}
	else if(type == 'X'){
		cell1.x = 0;		cell1.y = 1;
		cell2.x = 1;		cell2.y = 0;
		cell3.x = 1;		cell3.y = 1;	
		cell4.x = 1;		cell4.y = 2;
		cell5.x = 2;		cell5.y = 1;

		pentamino.width = 3;
		pentamino.height = 3;
	}
	else if(type == 'Y'){
		cell1.x = 0;		cell1.y = 1;
		cell2.x = 1;		cell2.y = 0;
		cell3.x = 1;		cell3.y = 1;	
		cell4.x = 1;		cell4.y = 2;
		cell5.x = 1;		cell5.y = 3;

		pentamino.width = 2;
		pentamino.height = 4;
	}
	else if(type == 'Z'){
		cell1.x = 0;		cell1.y = 0;
		cell2.x = 1;		cell2.y = 0;
		cell3.x = 1;		cell3.y = 1;	
		cell4.x = 1;		cell4.y = 2;
		cell5.x = 2;		cell5.y = 2;

		pentamino.width = 3;
		pentamino.height = 3;
	}
	else if (type == '9'){
		cell1.x = 0;	cell1.y = 0;
		cell2.x = 0;	cell2.y = 1;
		cell3.x = 0;	cell3.y = 2;
		cell4.x = 0;	cell4.y = 3;

		pentamino.width = 1;
		pentamino.height = 4;
	}
	else if (type == '8'){
		cell1.x = 0;	cell1.y = 0;
		cell2.x = 0;	cell2.y = 1;
		cell3.x = 1;	cell3.y = 0;
		cell4.x = 1;	cell4.y = 1;

		pentamino.width = 2;
		pentamino.height = 2;
	}
	else if (type == '7'){
		cell1.x = 0;	cell1.y = 0;
		cell2.x = 0;	cell2.y = 1;
		cell3.x = 0;	cell3.y = 2;
		cell4.x = 1;	cell4.y = 1;

		pentamino.width = 2;
		pentamino.height = 3;
	}
	else if (type == '6'){
		cell1.x = 0;	cell1.y = 1;
		cell2.x = 1;	cell2.y = 0;
		cell3.x = 1;	cell3.y = 1;
		cell4.x = 2;	cell4.y = 0;

		pentamino.width = 3;
		pentamino.height = 2;
	}
	else if (type == '5'){
		cell1.x = 0;	cell1.y = 0;
		cell2.x = 0;	cell2.y = 1;
		cell3.x = 1;	cell3.y = 1;
		cell4.x = 2;	cell4.y = 1;

		pentamino.width = 3;
		pentamino.height = 2;
	}
	else if (type == '4'){
		cell1.x = 0;	cell1.y = 0;
		cell2.x = 0;	cell2.y = 1;
		cell3.x = 0;	cell3.y = 2;

		pentamino.width = 1;
		pentamino.height = 3;
	}
	else if (type == '3'){
		cell1.x = 0;	cell1.y = 0;
		cell2.x = 0;	cell2.y = 1;
		cell3.x = 1;	cell3.y = 1;

		pentamino.width = 2;
		pentamino.height = 2;
	}
	else if (type == '2'){
		cell1.x = 0;	cell1.y = 0;
		cell2.x = 0;	cell2.y = 1;

		pentamino.width = 1;
		pentamino.height = 2;
	}
	if (type == '1'){
		cell1.x = 0;	cell1.y = 0;

		pentamino.width = 1;
		pentamino.height = 1;
	}

	pentamino.cells.push(cell1);
	if(type > '1')	pentamino.cells.push(cell2);
	else field.removeChild(cell2);
	if(type > '2')	pentamino.cells.push(cell3);
	else field.removeChild(cell3);
	if(type > '4')	pentamino.cells.push(cell4);
	else field.removeChild(cell4);
	if(type > '9')	pentamino.cells.push(cell5);
	else field.removeChild(cell5);


	 pentamino.y -= pentamino.height;
	 pentamino.x = Math.floor(field.width/2);

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	for(var i = 0 ; i< pentamino.cells.length;i++)
		pentamino.cells[i].style.background = "rgba("+r+','+g+','+b+',0.7)';
	return pentamino;
}


function checkMoveDown(){
	if(mainPentamino.y+mainPentamino.height >= field.height)
		return false;
	for(var j = 0 ; j< pull.length; j++){
		for(var i = 0 ; i< mainPentamino.cells.length;i++){
			var cell = mainPentamino.cells[i];
			if(mainPentamino.x + cell.x == pull[j].x && 
				mainPentamino.y + cell.y + 1 == pull[j].y)
				return false;
		}
	}

	return true;
}

function checkMoveLeft(){
	if(mainPentamino.x  -1 < 0)
		return false;
	for(var i = 0 ; i<pull.length;i++){
		for(var j = 0; j<mainPentamino.cells.length;j++ ){
			var cell = mainPentamino.cells[j];
			if(mainPentamino.x + cell.x - 1 == pull[i].x && 
				mainPentamino.y + cell.y == pull[i].y)
				return false;
		}
	}
	return true;
}

function checkMoveRight(){
	if(mainPentamino.x + mainPentamino.width >= field.width)
		return false;
	for(var i = 0 ; i<pull.length;i++){
		for(var j = 0; j<mainPentamino.cells.length;j++ ){
			var cell = mainPentamino.cells[j];
			if(mainPentamino.x + cell.x + 1 == pull[i].x && 
				mainPentamino.y + cell.y == pull[i].y)
				return false;
		}
	}
	return true;
}


function rotate(){
	var newP = createPentamino(mainPentamino.type);
	newP.width = mainPentamino.height;
	newP.height = mainPentamino.width;
	newP.x = mainPentamino.x + Math.round((mainPentamino.width - newP.width)/2.01);
	newP.y = mainPentamino.y + Math.round((mainPentamino.height - newP.height)/2.01);

	var x,y,xMin = 100, yMin = 100;
	for(var i=0;i<mainPentamino.cells.length;i++){
		x = mainPentamino.cells[i].y;
		y = - mainPentamino.cells[i].x;
		if(x < xMin) xMin = x;
		if(y < yMin) yMin = y;

		newP.cells[i].x = x;
		newP.cells[i].y = y;
		// console.log(newP.cells[i].x + ' ' + newP.cells[i].y);
	}

	for(var i=0;i<mainPentamino.cells.length;i++){
		newP.cells[i].x -= xMin;
		newP.cells[i].y -= yMin;
		newP.cells[i].style.background = mainPentamino.cells[i].style.background;
		// console.log(mainPentamino.cells[i].x + ' ' + mainPentamino.cells[i].y);
	}
		
	while(newP.x+newP.width>field.width)
		newP.x--;
	while(newP.x<0)
		newP.x++;



	for(var i=0;i<pull.length;i++)
		for(var j=0;j<newP.cells.length;j++){
			var cell = newP.cells[j];
			if(cell.x+newP.x == pull[i].x &&
				cell.y+newP.y == pull[i].y)
			{
				removePentamino(newP);
				return mainPentamino;
			}
		}
		removePentamino(mainPentamino);
		mainPentamino = newP;

	}

	function removePentamino(p){
		for(var j=0;j<p.cells.length;j++)
			field.removeChild(p.cells[j]);

	}

function reflection(){
	var newP = createPentamino(mainPentamino.type);
	for(var i = 0 ; i < newP.cells.length;i++){
		newP.cells[i].x = -newP.cells[i].x + newP.width-1;
		newP.cells[i].style.background = mainPentamino.cells[i].style.background;
	}
	removePentamino(mainPentamino);
	mainPentamino = newP;
}
