function Pentamino(type) {
	this.cell1 = document.createElement('div');
	this.cell1.className = "cell";
	field.appendChild(this.cell1)

	this.cell2 = document.createElement('div');
	this.cell2.className = "cell";
	field.appendChild(this.cell2)

	this.cell3 = document.createElement('div');
	this.cell3.className = "cell";
	field.appendChild(this.cell3)

	this.cell4 = document.createElement('div');
	this.cell4.className = "cell";
	field.appendChild(this.cell4)

	this.cell5 = document.createElement('div');
	this.cell5.className = "cell";
	field.appendChild(this.cell5);
	
	this.x = 0;
	this.y = 0;
	this.cells = [];
	this.type = type;
	this.width;
	this.height

	if(type == 'F'){
		this.cell1.x = 0;		this.cell1.y = 1;
		this.cell2.x = 1;		this.cell2.y = 2;
		this.cell3.x = 1;		this.cell3.y = 1;	
		this.cell4.x = 1;		this.cell4.y = 0;
		this.cell5.x = 2;		this.cell5.y = 0;

		this.width = 3;
		this.height = 3;
	}
	else if(type == 'I'){
		this.cell1.x = 0;		this.cell1.y = 0;
		this.cell2.x = 0;		this.cell2.y = 1;
		this.cell3.x = 0;		this.cell3.y = 2;	
		this.cell4.x = 0;		this.cell4.y = 3;
		this.cell5.x = 0;		this.cell5.y = 4;

		this.width = 1;
		this.height = 5;
	}
	else if(type == 'L'){
		this.cell1.x = 0;		this.cell1.y = 0;
		this.cell2.x = 0;		this.cell2.y = 1;
		this.cell3.x = 0;		this.cell3.y = 2;	
		this.cell4.x = 0;		this.cell4.y = 3;
		this.cell5.x = 1;		this.cell5.y = 3;

		this.width = 2;
		this.height = 4;
	}
	else if(type == 'N'){
		this.cell1.x = 0;		this.cell1.y = 0;
		this.cell2.x = 0;		this.cell2.y = 1;
		this.cell3.x = 0;		this.cell3.y = 2;	
		this.cell4.x = 1;		this.cell4.y = 2;
		this.cell5.x = 1;		this.cell5.y = 3;

		this.width = 2;
		this.height = 4;
	}
	else if(type == 'P'){
		this.cell1.x = 0;		this.cell1.y = 0;
		this.cell2.x = 0;		this.cell2.y = 1;
		this.cell3.x = 0;		this.cell3.y = 2;	
		this.cell4.x = 1;		this.cell4.y = 0;
		this.cell5.x = 1;		this.cell5.y = 1;

		this.width = 2;
		this.height = 3;
	}
	else if(type == 'T'){
		this.cell1.x = 0;		this.cell1.y = 0;
		this.cell2.x = 1;		this.cell2.y = 0;
		this.cell3.x = 1;		this.cell3.y = 1;	
		this.cell4.x = 1;		this.cell4.y = 2;
		this.cell5.x = 2;		this.cell5.y = 0;

		this.width = 3;
		this.height = 3;
	}
	else if(type == 'U'){
		this.cell1.x = 0;		this.cell1.y = 0;
		this.cell2.x = 0;		this.cell2.y = 1;
		this.cell3.x = 1;		this.cell3.y = 1;	
		this.cell4.x = 2;		this.cell4.y = 0;
		this.cell5.x = 2;		this.cell5.y = 1;

		this.width = 3;
		this.height = 2;
	}
	else if(type == 'V'){
		this.cell1.x = 0;		this.cell1.y = 0;
		this.cell2.x = 0;		this.cell2.y = 1;
		this.cell3.x = 0;		this.cell3.y = 2;	
		this.cell4.x = 1;		this.cell4.y = 2;
		this.cell5.x = 2;		this.cell5.y = 2;

		this.width = 3;
		this.height = 3;
	}
	else if(type == 'W'){
		this.cell1.x = 0;		this.cell1.y = 0;
		this.cell2.x = 0;		this.cell2.y = 1;
		this.cell3.x = 1;		this.cell3.y = 1;	
		this.cell4.x = 1;		this.cell4.y = 2;
		this.cell5.x = 2;		this.cell5.y = 2;

		this.width = 3;
		this.height = 3;
	}
	else if(type == 'X'){
		this.cell1.x = 0;		this.cell1.y = 1;
		this.cell2.x = 1;		this.cell2.y = 0;
		this.cell3.x = 1;		this.cell3.y = 1;	
		this.cell4.x = 1;		this.cell4.y = 2;
		this.cell5.x = 2;		this.cell5.y = 1;

		this.width = 3;
		this.height = 3;
	}
	else if(type == 'Y'){
		this.cell1.x = 0;		this.cell1.y = 1;
		this.cell2.x = 1;		this.cell2.y = 0;
		this.cell3.x = 1;		this.cell3.y = 1;	
		this.cell4.x = 1;		this.cell4.y = 2;
		this.cell5.x = 1;		this.cell5.y = 3;

		this.width = 2;
		this.height = 4;
	}
	else if(type == 'Z'){
		this.cell1.x = 0;		this.cell1.y = 0;
		this.cell2.x = 1;		this.cell2.y = 0;
		this.cell3.x = 1;		this.cell3.y = 1;	
		this.cell4.x = 1;		this.cell4.y = 2;
		this.cell5.x = 2;		this.cell5.y = 2;

		this.width = 3;
		this.height = 3;
	}
	else if (type == '9'){
		this.cell1.x = 0;	this.cell1.y = 0;
		this.cell2.x = 0;	this.cell2.y = 1;
		this.cell3.x = 0;	this.cell3.y = 2;
		this.cell4.x = 0;	this.cell4.y = 3;

		this.width = 1;
		this.height = 4;
	}
	else if (type == '8'){
		this.cell1.x = 0;	this.cell1.y = 0;
		this.cell2.x = 0;	this.cell2.y = 1;
		this.cell3.x = 1;	this.cell3.y = 0;
		this.cell4.x = 1;	this.cell4.y = 1;

		this.width = 2;
		this.height = 2;
	}
	else if (type == '7'){
		this.cell1.x = 0;	this.cell1.y = 0;
		this.cell2.x = 0;	this.cell2.y = 1;
		this.cell3.x = 0;	this.cell3.y = 2;
		this.cell4.x = 1;	this.cell4.y = 1;

		this.width = 2;
		this.height = 3;
	}
	else if (type == '6'){
		this.cell1.x = 0;	this.cell1.y = 1;
		this.cell2.x = 1;	this.cell2.y = 0;
		this.cell3.x = 1;	this.cell3.y = 1;
		this.cell4.x = 2;	this.cell4.y = 0;

		this.width = 3;
		this.height = 2;
	}
	else if (type == '5'){
		this.cell1.x = 0;	this.cell1.y = 0;
		this.cell2.x = 0;	this.cell2.y = 1;
		this.cell3.x = 1;	this.cell3.y = 1;
		this.cell4.x = 2;	this.cell4.y = 1;

		this.width = 3;
		this.height = 2;
	}
	else if (type == '4'){
		this.cell1.x = 0;	this.cell1.y = 0;
		this.cell2.x = 0;	this.cell2.y = 1;
		this.cell3.x = 0;	this.cell3.y = 2;

		this.width = 1;
		this.height = 3;
	}
	else if (type == '3'){
		this.cell1.x = 0;	this.cell1.y = 0;
		this.cell2.x = 0;	this.cell2.y = 1;
		this.cell3.x = 1;	this.cell3.y = 1;

		this.width = 2;
		this.height = 2;
	}
	else if (type == '2'){
		this.cell1.x = 0;	this.cell1.y = 0;
		this.cell2.x = 0;	this.cell2.y = 1;

		this.width = 1;
		this.height = 2;
	}
	if (type == '1'){
		this.cell1.x = 0;	this.cell1.y = 0;

		this.width = 1;
		this.height = 1;
	}

	this.cells.push(this.cell1);
	if(type > '1')	this.cells.push(this.cell2);
	else field.removeChild(this.cell2);
	if(type > '2')	this.cells.push(this.cell3);
	else field.removeChild(this.cell3);
	if(type > '4')	this.cells.push(this.cell4);
	else field.removeChild(this.cell4);
	if(type > '9')	this.cells.push(this.cell5);
	else field.removeChild(this.cell5);


	 this.y -= this.height;
	 this.x = Math.floor(field.width/2);

	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	for(var i = 0 ; i< this.cells.length;i++)
		this.cells[i].style.background = "rgba("+r+','+g+','+b+',0.7)';

}


Pentamino.prototype.checkMoveDown = function(){
	if(this.y+this.height >= field.height)
		return false;
	for(var j = 0 ; j< pull.length; j++){
		for(var i = 0 ; i< this.cells.length;i++){
			var cell = this.cells[i];
			if(this.x + cell.x == pull[j].x && 
				this.y + cell.y + 1 == pull[j].y)
				return false;
		}
	}

	return true;
}

Pentamino.prototype.checkMoveLeft = function(){
	if(this.x  -1 < 0)
		return false;
	for(var i = 0 ; i<pull.length;i++){
		for(var j = 0; j<this.cells.length;j++ ){
			var cell = this.cells[j];
			if(this.x + cell.x - 1 == pull[i].x && 
				this.y + cell.y == pull[i].y)
				return false;
		}
	}
	return true;
}

Pentamino.prototype.checkMoveRight = function(){
	if(this.x + this.width >= field.width)
		return false;
	for(var i = 0 ; i<pull.length;i++){
		for(var j = 0; j<this.cells.length;j++ ){
			var cell = this.cells[j];
			if(this.x + cell.x + 1 == pull[i].x && 
				this.y + cell.y == pull[i].y)
				return false;
		}
	}
	return true;
}


Pentamino.prototype.rotate = function(){
	var newP = new Pentamino(this.type);
	newP.width = this.height;
	newP.height = this.width;
	newP.x = this.x + Math.round((this.width - newP.width)/2.01);
	newP.y = this.y + Math.round((this.height - newP.height)/2.01);

	var x,y,xMin = 100, yMin = 100;
	for(var i=0;i<this.cells.length;i++){
		x = this.cells[i].y;
		y = - this.cells[i].x;
		if(x < xMin) xMin = x;
		if(y < yMin) yMin = y;

		newP.cells[i].x = x;
		newP.cells[i].y = y;
		// console.log(newP.this.cells[i].x + ' ' + newP.this.cells[i].y);
	}

	for(var i=0;i<this.cells.length;i++){
		newP.cells[i].x -= xMin;
		newP.cells[i].y -= yMin;
		newP.cells[i].style.background = this.cells[i].style.background;
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
				newP.remove();
				return;
			}
		}
	this.remove();
	mainPentamino = newP;
}

Pentamino.prototype.remove = function(){
	for(var j=0;j<this.cells.length;j++)
		field.removeChild(this.cells[j]);
}

Pentamino.prototype.reflection = function(){
	var newP = new Pentamino(this.type);
	for(var i = 0 ; i < newP.cells.length;i++){
		newP.cells[i].x = -newP.cells[i].x + newP.width-1;
		newP.cells[i].style.background = this.cells[i].style.background;
	}
	this.remove();
	this.cells = newP.cells;

}

Pentamino.prototype.drawCell = function(cell,posX,posY) {
	if(posX == undefined) posX = cell.x;
	if(posY==undefined) posY = cell.y
	var x = posX*cell.offsetWidth;
	var y = posY*cell.offsetHeight;
	cell.style.left = x + 'px';
	cell.style.top = y + 'px';

}

Pentamino.prototype.draw = function(){
	for(var i = 0 ; i < this.cells.length;i++){
		var cell = this.cells[i];
		if(cell.y + this.y >= 0)
			this.drawCell(cell, this.x + cell.x,this.y + cell.y);
	}
}
