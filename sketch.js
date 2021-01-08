var H,M,S;
var hourAngle, minAngle, secAngle;

function setup() {
  createCanvas(1340,606);
}

function draw() {
  background("blue");
  fill(255);
  noStroke();
  strokeWeight(5); 
  textSize(40); 
  fill("black");
  text("Tick-Tock",620,503);
 
  S = second();
  M = minute();
  H = hour();

  angleMode(DEGREES);
  translate(670,200);
  rotate(-90);

  secAngle = map(S, 0, 60, 0, 360);
  minAngle = map(M, 0, 60, 0, 360);
  hourAngle = map(H % 12, 0, 12, 0, 360);

  push();
  rotate(secAngle);
  stroke(102,255,0);
  strokeWeight(8);
  line(0, 0, 100, 0);
  noFill();
  arc(0, 0, 260, 260, -secAngle, 0);
  pop();

  push();
  rotate(minAngle);
  stroke("black");
  strokeWeight(8);
  line(0, 0, 75, 0);
  noFill();
  arc(0, 0, 280, 280, -minAngle, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("white");
  strokeWeight(8);
  line(0, 0, 50, 0);
  noFill();
  arc(0, 0, 300, 300, -hourAngle, 0);
  pop();
}