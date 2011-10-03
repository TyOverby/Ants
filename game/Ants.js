var pane;
var game;

function Ants(canvasID){
	pane = new Pane(canvasID);

	var gameObjects = [];

	this.startup = function(){
		gameObjects.push(new Ant(new GameMath.Vector2f(200,200),1,1000,10));
	}

	this.update = function(){
		var objectLength = gameObjects.length;
		for (var i = 0; i< objectLength; i++){
			gameObjects[i].update(gameObjects);
		}
	}

	this.render = function(){
		pane.getContext().fillStyle = "rgba(255,255,255,0.5)";
		pane.getContext().fillRect(0,0,pane.getWidth(),pane.getHeight());

		pane.getContext().fillStyle = "black";

		//render all the ants
		var objectLength = gameObjects.length;
		for (var i = 0; i< objectLength; i++){
			gameObjects[i].draw();
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