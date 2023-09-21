let x,y,r,g,b;
let startTime;
function setup() {
  createCanvas(1960,1080);
   background(0);
  startTime=millis();
}
function draw() {
 let currTime=millis();
  
  if(currTime-startTime>100000){
    background(0);
    startTime=millis();
  }
  r=random(255);
  g=0;
  // b=0;
  b=random(255);
  //for random positioning of the circle
  x=random(width);
  y=random(height);
  color(r);
  noStroke();
  fill(r,g,b,100);
  circle(x,y,10);
  
}