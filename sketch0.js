
// canvas setup so the canvas is the size of the window that is opened
// rectmode has to be at center so the squares get bigger with how quick you
// move your mouse
  function setup() {
    createCanvas(841, 594);
    background(0);

// I wanted the cursor to be a cross so that the user can clearly see where
// they will be drawing on the canvas
    cursor(CROSS);
    rectMode(CENTER)
}

// Draw funtion set up, setting up teh variableEllipse, with a random stroke
// increased stroke weight so can see the shaapes better
  function draw() {
    strokeWeight(5);

// Text placed on the page so the user knows the keys to press if they want to
// reset the canvas or save the canvas to their workspace

    textSize(15);
    fill(255);
    textAlign(RIGHT);
    text('DELETE to reset page', 815, 550);
    textAlign(RIGHT);
    text('RETURN to save image', 815, 570);

// If statement for mouseIsPressed this is done for left,right and scroll button
// in these events when the mouse is clicked a new shape is drawn circle,
// rectangle and triangle repectively.

  if (mouseIsPressed){
    noFill()
  if (mouseButton===LEFT){

// These also have a stroke of a random colour, with their min colour
// to 50 so each shape is easily visable

    stroke(random(50, 255), random(50, 255), random(50, 255));
      variableEllipse(mouseX,mouseY,pmouseX, pmouseY)
}
  if (mouseButton===RIGHT){
    stroke(random(50, 255), random(50, 255), random(50, 255));
      variableRect(mouseX,mouseY,pmouseX, pmouseY)
}
  if (mouseButton===CENTER){
    stroke(random(50, 255), random(50, 255), random(50, 255));
      triangle(mouseX,mouseY,mouseX*1.2,mouseY*1.2,mouseX*1.2,mouseY*1.4)
  }
}
}

// If the delete key is pressed this will reset the background
    function keyPressed() {
      if (keyCode === DELETE) {
          background(0);
        }

// If the return key is pressed this will give the user an option to save
// their canvas
      if (keyCode === RETURN) {
        save();
        save('myCanvas.jpg');
        }
      }

// Each if statement is linked to a variable that looks at the speed at which
// you move your mouse, the quick you move it the, the bigger the shape. These
// variables work by looking at the accelleration between where your mouse was
// and where it ends.

  function variableEllipse(x, y, px, py) {
    var speed = abs(x-px) + abs(y-py);
    ellipse(x, y, speed, speed);
}

  function variableRect(x, y, px, py) {
    var speed = abs(x-px) + abs(y-py);
    rect(x, y, speed, speed);
}
