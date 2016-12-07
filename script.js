function polygonplz (sides) {
  for (var i = 0; i < sides; i++) {
    goForward(400/sides);
    turnLeft(360/sides);
  }
}
$( "#buttonthing" ).click(function() {
  var sides = $("#numberz").val();  
  console.log(sides);
  for (var i = 0; i < sides; i++) {
      goForward(400/sides);
      turnLeft(360/sides);
    }
});
$( "#secondbuttonthing" ).click(function() {
  var sides = $("#secondthing").val();  
  console.log(sides);
  for (var i = 0; i < sides; i++) {
    goForward(400/sides);
    turnLeft(180/(sides-2);
  }
});