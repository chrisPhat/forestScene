function setup() {
    var canvas = createCanvas(600, 400);
    canvas.parent("p5container");
}

function draw() {
    background(119, 141, 169);
    
    noStroke();
    
    //sun
    fill(255, 191, 70)
    ellipse(540, 60 , 80 , 80)
    
    //cloud
    fill(255)
    ellipse(300, 60 , 80 , 80)
    ellipse(325, 70 , 60 , 60)
    ellipse(275, 70 , 60 , 60)
    
    fill(200)
    ellipse(410, 70 , 60 , 60)
    ellipse(435, 80 , 40 , 40)
    ellipse(385, 80 , 40 , 40)
    
    //mountains
    fill(138, 203, 136, 80);//4th value is the alpha channel
    triangle(0, 200, 90, 30, 180, 200)
    triangle(20, 200, 130, 1, 260, 200)
    
    //trees
    fill(82, 58, 52)
    rect(40, 190, 10, 10)
    fill(6, 81, 67)
    triangle(30, 190, 45, 150, 60, 190)
    
    fill(82, 58, 52)
    rect(80, 190, 10, 10)
    fill(6, 81, 67)
    triangle(70, 190, 85, 150, 100, 190)
    
    //grass
    fill(138, 203, 136)
    rect(0, 200, 600, 200)
    
    //house
    fill(107, 43, 6)
    rect(400, 220, 150, 100)
    
    //roof
    fill(184, 12, 9)
    quad(380, 220, 570, 220, 530, 180, 420, 180);
    
    
    //door
    fill(255)
    rect(460, 270, 35, 50)
    
    //windows
    
    fill(255)
    rect(420, 270, 25, 25)
    
    fill(255)
    rect(510, 270, 25, 25)
    
    fill(255)
    rect(420, 230, 25, 25)
    
    fill(255)
    rect(510, 230, 25, 25)
  }