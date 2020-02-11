
let x = 0;
let y = 0;
let frames = 0;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(0);
  frames+= 0.01;
  //ellipse(200)
  noStroke()
  ellipse(width/2, height/2, 66, 66);
  drawMoon(frames%30);
  fill(255, 255, 51);
  

}

function drawMoon(phase){
  fill(0);
  let xpos = map(phase, 0, 30, 0, width);
  ellipse(xpos, height/2, 66, 66);





  
}