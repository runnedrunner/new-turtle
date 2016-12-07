function polygonplz (sides) {
  for (var i = 0; i < sides; i++) {
    goForward(400/sides);
    turnLeft(360/sides);
  }
}
