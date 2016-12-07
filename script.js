function polygonplz (sides) {
  for (var i = 0; i < sides; i++) {
    goForward(400/sides);
    turnLeft(360/sides);
  }
}
$( "#buttonthing" ).click(function() {
  var sides = $("#numberz").value;  
  console.log(sides);
  for (var i = 0; i < sides; i++) {
      goForward(400/sides);
      turnLeft(360/sides);
    }
});