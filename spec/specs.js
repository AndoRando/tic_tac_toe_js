describe('Player', function() {
  it("verifies that the player object is built as intended",function () {
    var testPlayer = new Player ("Bill", "O");
    expect(testPlayer.name).to.equal("Bill");
    expect(testPlayer.type).to.equal("O");
  });
});

describe('Space', function() {
  it("verifies that the space object is built as intended",function () {
    var testSpace = new Space (1, 3, null);
    expect(testSpace.xCoordinate).to.equal(1);
    expect(testSpace.yCoordinate).to.equal(3);
    expect(testSpace.mark).to.equal(null);
  });
});

// describe('', function() {
//   it("", function() {
//
//   });
// });
//
// describe('', function() {
//   it("", function() {
//
//   });
// });
