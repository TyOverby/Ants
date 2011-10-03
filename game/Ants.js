var pane;
var game;

function Ants(canvasID){
	pane = new Pane(canvasID);

	var ants = [];

	this.startup = function(){
		ants.push(new Ant(new Vector2f(200,200)));
	}

	this.update = function(){
		var antsLength = ants.length;
		for (var i = 0; i< antsLength; i++){
			ants[i].update();
		}
	}

	this.render = function(){
		pane.getContext().fillStyle = "rgba(255,255,255,0.06)";
		pane.getContext().fillRect(0,0,pane.getWidth(),pane.getHeight());

		pane.getContext().fillStyle = "black";

		//render all the ants
		var antsLength = ants.length;
		for (var i = 0; i< antsLength; i++){
			ants[i].draw();
		}
	}

	this.isRunning = function(){
		return true;
	}
}

function start(){
	if(game === undefined){
		var ants = new Ants("canvas");
		game = new Engine(ants);
	}
	game.run();
}