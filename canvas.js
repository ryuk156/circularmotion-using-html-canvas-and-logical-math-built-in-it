
var canvas = document.querySelector('canvas');


canvas.width= window.innerWidth;
canvas.height= window.innerHeight;



var c = canvas.getContext('2d');



var colorArray=[
  '#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'

]

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

document.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

  
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}



function Circle(x,y,radius,color){
	this.x=x;
	this.y=y;
	 this.radius=radius;
   this.radian=Math.random()*Math.PI*2
   this.velocity=0.06
   this.distancefromcenter=randomIntFromRange(50,100)
   this.lastmouse={x:x,y:y}


    this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
	this.draw= lastpoint=>{

	c.beginPath()
  c.strokeStyle=this.color
  c.lineWidth=this.radius
	c.moveTo(lastpoint.x,lastpoint.y)
  c.lineTo(this.x,this.y)
  c.stroke()
  c.closePath()
    
    

	}

	this.update= function(){

          var lastpoint={x:this.x,y:this.y}

          this.lastmouse.x+=(mouse.x-this.lastmouse.x)*0.05
          this.lastmouse.y+=(mouse.y-this.lastmouse.y)*0.05
          this.radian+=this.velocity
          this.x= this.lastmouse.x+Math.cos(this.radian)*this.distancefromcenter
          this.y= this.lastmouse.y+Math.sin(this.radian)*this.distancefromcenter
         this.draw(lastpoint);
     }
     

}

var circleArray =[];

for(var i=0; i<50 ;i++){
	var radius=(Math.random()*2)+1
	circleArray.push(new Circle(canvas.width/2,canvas.height/2,radius));

}
function animate(){
	requestAnimationFrame(animate);
  c.fillStyle = 'rgba(255,255,255,0.05)'
	c.fillRect(0,0,innerWidth,innerHeight)
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
	
	
}

animate();









 
