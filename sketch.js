points = [];   
start = false;
function setup(){
  createCanvas(400,400);
}
function draw(){
  background(51);
  if(start){
    points.push(createVector(mouseX,mouseY));
  }
  stroke(255);
  noFill();
  beginShape();
  for(let i = 0; i<points.length; i++){
    let x = points[i].x;
    let y = points[i].y;
    vertex(x,y);

  }
  endShape();
}
function mousePressed(){
  start = true;
}
function mouseRealeased(){
  start = false;
}