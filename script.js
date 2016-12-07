function polygonplz (sides) {
  for (var i = 0; i < sides; i++) {
    goForward(100)
    turnLeft(360/sides);
  }
}
polygonplz(10);