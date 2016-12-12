var heading = 0

var position = {x: 0, y: 0};
$( "#position" ).click(function() {
  var expos = $("#x").val();
  var eypos = $("#y").val();
  var position = {x: expos, y: eypos};
  turtle.animate({
    left: position.x, 
    bottom: position.y,
  });
  console.log(expos + eypos);
});
var turtle = $("#turtle");
var turtleCage = $(".turtle-cage")

function turnRight(n) {
  heading = heading + n  
}

function turnLeft(n) {
  heading = heading - n 
}

function goForward(distance) {    
  var radians = -1 * heading * (Math.PI/180);
  var yIncrement = Math.sin(radians) * distance;
  var xIncrement = Math.cos(radians) * distance;        

  var origPosition = {x: position.x, y: position.y}; 
  var origHeading = heading;

  position.x = position.x + xIncrement;
  position.y = position.y + yIncrement;

  turtle.animate({
    left: position.x, 
    bottom: position.y,
  }, {
    complete : function() {
      insertLine(origPosition, origHeading, distance);

    }, duration: 10,
  })

}

function insertLine(start, angle, distance) {
  var lineEl = $("<div class='line'></div>")
  lineEl.css({
    "left": start.x,
    "bottom": start.y,
    "width": distance,
    height: "1px",
    "transform-origin": "0 0 0",
    transform: "rotate(" + angle + "deg)",
    background: "black",
    position: "absolute"
  })
  
  turtleCage.append(lineEl)
}
var pendown = true;
document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '38') {
    console.log("up!");
      goForward(50);
  }
  else if (e.keyCode == '40') {
    console.log("down!");
  }
  else if (e.keyCode == '37') {
    console.log("left!");
  }
  else if (e.keyCode == '39') {
    console.log("right!");
  }

}
