function setup() {
  let canvas = createCanvas(320, 150);
  canvas.parent('p5-container');

  colorMode(HSB);
  angleMode(DEGREES);
  describe('Dos ojitos que siguen el cursor.');
}

function draw() {
  background('#0d0d0d');

  // Ojo izquierdo
  let leftX = 115;
  let leftY = 75;
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  stroke('#ff2a85');
  strokeWeight(3);
  fill('#f5f5f7');
  ellipse(0, 0, 55, 55);
  rotate(leftAngle);
  noStroke();
  fill('#ff2a85');
  ellipse(13, 0, 24, 24);
  fill('#0d0d0d');
  ellipse(15, 0, 10, 10);
  pop();

  // Ojo derecho
  let rightX = 205;
  let rightY = 75;
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  stroke('#ff2a85');
  strokeWeight(3);
  fill('#f5f5f7');
  ellipse(0, 0, 55, 55);
  rotate(rightAngle);
  noStroke();
  fill('#ff2a85');
  ellipse(13, 0, 24, 24);
  fill('#0d0d0d');
  ellipse(15, 0, 10, 10);
  pop();
}