function Ant(position){
	this.position = position;

	this.draw = function(){
		pane.drawRectFill(position.x,position.y,10,10,"black");
	}
}