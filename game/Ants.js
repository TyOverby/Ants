var pane;

function Ants(canvasID){
	pane = new Pane(canvasID);

	var ants = [];

	this.startup = function(){
		
	}

	this.update = function(){
	}

	this.render = function(){
		pane.drawRectFill(0,0,20,20,"green");
	}

	this.isRunning = function(){
		return true;
	}
}

function start(){
	myGame = new Ants("canvas");
	game = new Engine(myGame);
	game.run();
}