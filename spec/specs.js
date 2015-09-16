describe('Player', function() {
  it("verifies that the player object is built as intended",function () {
    var testPlayer = new Player ("Bill", "O");
    expect(testPlayer.name).to.equal("Bill");
    expect(testPlayer.type).to.equal("O");
  });
});
