function Vector2f(x,y){
	this.x = x;
	this.y = y;

	this.plus = function(one,two){
		if(arguments[1]){
			return new Vector2f(this.x + one,this.y + two);
		}
		else if(arguments[0]){
			return this.plus(one.x,two.y)
		}
		else{
			console.log(arguments);
		}
	}
	this.plusEquals = function(one,two){
		if(arguments[1]){
			this.x += one;
			this.y += two;
		}
		else{
			this.plusEquals(one.x,two.y)
		}
	}

	this.minus = function(one,two){
		if(arguments[1]){
			return new Vector2f(this.x - one,this.y - two);
		}
		else{
			return this.minus(one.x,two.y)
		}
	}
	this.minusEquals = function(one,two){
		if(arguments[1]){
			this.x -= one;
			this.y -= two;
		}
		else{
			this.minusEquals(one.x,two.y)
		}
	}

	

	this.times = function(one,two){
		if(arguments[1]){
			return new Vector2f(this.x * one,this.y * two);
		}
		else{
			return new Vector2f(this.x * one, this.y * one);
		}
	}
	this.timesEquals = function(one,two){
		if(arguments[1]){
			this.x *= one;
			this.y *= two;
		}
		else{
			this.x *= one;
			this.y *= one;
		}
	}


	this.divideBy = function(one,two){
		if(arguments[1]){
			return new Vector2f(this.x / one,this.y / two);
		}
		else{
			return new Vector2f(this.x / one, this.y / one);
		}
	}

	this.divideEquals = function(one,two){
		if(arguments[1]){
			this.x /= one;
			this.y /= two;
		}
		else{
			this.x /= one;
			this.y /= one;
		}
	}

	this.reverse = function(){
		this.x=-this.x;
		this.y=-this.y;

		return this;
	}

	this.normalize = function(){
		var magnitude = Math.sqrt(this.x*this.x+this.y*this.y);

		this.x /= magnitude;
		this.y /= magnitude;
	}
}