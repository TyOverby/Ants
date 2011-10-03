function Ant(position, speed, maxHealth, strength){
	this.position = position;
	this.velocity = new GameMath.Vector2f(GameMath.Random.randDouble()-0.5,GameMath.Random.randDouble()-0.5);

	this.variance = 1/2;
	this.speed = speed;
	this.maxHealth = maxHealth;
	this.strength = strength;

	this.update = function(gameObjects){
		this.updatePosition();
		this.targetObjects(gameObjects);
	}

	this.updatePosition = function(){
		var distFromTop = this.position.y;
		var distFromBot = pane.getHeight()-this.position.y;
		var distFromLeft = this.position.x;
		var distFromRight = pane.getWidth() - this.position.x;

		var padding = 10;

		if(distFromTop<padding){
			this.velocity.y = 1;
		}
		if(distFromBot<padding){
			this.velocity.y = -1;
		}

		if(distFromRight<padding){
			this.velocity.x=-1;
		}
		if(distFromLeft<padding){
			this.velocity.x=1;
		}

		//get add velocity to the position
		this.position.plusEquals(this.velocity.x,this.velocity.y);
		//add random variance to the objects path
		this.velocity.plusEquals((GameMath.Random.randDouble()-0.5)*this.variance,(GameMath.Random.randDouble()-0.5)*this.variance);
		this.velocity.normalize();
		this.velocity.timesEquals(this.speed);
	}

	this.targetObjects = function(){
		
	}

	this.draw = function(){
		pane.drawCircleFill(this.position.x,this.position.y,3,"red");
		var linemag = 10;
		pane.drawLine(this.position.x,this.position.y,this.position.x+this.velocity.x*linemag,this.position.y+this.velocity.y*linemag);
	}
}