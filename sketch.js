function setup() {
	angleMode(DEGREES);
	createCanvas(200, 200);
	background(0);
}

function draw() {
translate(height/2, width/2);
beginShape();
for(q=0;q<360;q++){
let x=cos(q)*(10*(sin(5*q)));
let y=sin(q)*(10*(sin(5*q)));
vertex(x,y);
}
endShape();
stroke(255);
}