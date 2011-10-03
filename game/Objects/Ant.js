function Ant(position){
	this.position = position;
	this.velocity = new Vector2f(Math.random()-0.5,Math.random()-0.5);

	this.variance = 1/2;
	this.speed = 2;

	this.update = function(){

		//If it hits one of the sides (x direction), reverse the x velocity;
		if((this.position.x<0||this.position.x>pane.getWidth())){
			this.velocity.x*=-1;
		}
		//if it hits one of the sides (y direction), reverse the y velocity; 
		if((this.position.y<0||this.position.y>pane.getHeight())){
			this.velocity.y*=-1;
		}

		//get add velocity to the position
		this.position.plusEquals(this.velocity.x,this.velocity.y);
		//add random variance to the objects path
		this.velocity.plusEquals((Math.random()-0.5)*this.variance,(Math.random()-0.5)*this.variance);
		this.velocity.normalize();
		this.velocity.timesEquals(this.speed);
	}

	this.draw = function(){
		pane.drawRectFill(this.position.x,this.position.y,10,10,"red");
	}
}