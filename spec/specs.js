// Player object

describe('Player', function() {
  it("verifies that the player object is built as intended", function() {
    var testPlayer = new Player("Bill", "O");
    expect(testPlayer.name).to.equal("Bill");
    expect(testPlayer.type).to.equal("O");
  });
});

// Space object

describe('Space', function() {
  it("verifies that the space object is built as intended", function() {
    var testSpace = new Space(1, 3, null);
    expect(testSpace.xCoordinate).to.equal(1);
    expect(testSpace.yCoordinate).to.equal(3);
    expect(testSpace.mark).to.equal(null);
  });
});

// Board object

describe('Board', function() {
  it("verifies that the board object is built as intended", function() {
    var testBoard = new Board();
    expect(testBoard.spaces).to.eql([]);
  });

  describe('buildBoard', function() {
    it("populates the new board with spaces", function() {
      var testBoard = new Board();
      testBoard.buildBoard();
      expect(testBoard.spaces[2].xCoordinate).to.equal(3);
      expect(testBoard.spaces[2].yCoordinate).to.equal(1);
    });
  });
});

// Game object

describe('Game', function () {
  it("will create a game with two players and a board", function() {
    var testPlayerX = new Player("Max", "X");
    var testPlayerO = new Player("Charlie", "O");
    var testBoard = new Board();
    testBoard.buildBoard();
    var testGame = new Game(testPlayerX, testPlayerO, testBoard);
    expect(testGame.playerX).to.eql(testPlayerX);
    expect(testGame.playerX).to.eql(testPlayerX);
    expect(testGame.board).to.eql(testBoard);
  });

  describe('victory', function() {
    it("will determine if a horizontal victory condition has been met", function() {
      var testPlayerX = new Player("Max", "X");
      var testPlayerO = new Player("Charlie", "O");
      var testBoard = new Board();
      testBoard.buildBoard();
      var testGame = new Game(testPlayerX, testPlayerO, testBoard);
      playerOTurn(0);
      playerXTurn(6);
      playerOTurn(1);
      playerXTurn(7);
      expect(playerOTurn(2)).to.eql("Charlie wins");
    });

    it("will determine if a vertical victory condition has been met", function() {
      var testPlayerX = new Player("Max", "X");
      var testPlayerO = new Player("Charlie", "O");
      var testBoard = new Board();
      testBoard.buildBoard();
      var testGame = new Game(testPlayerX, testPlayerO, testBoard);
      playerXTurn(0);
      playerOTurn(2);
      playerXTurn(3);
      playerOTurn(5);
      expect(playerXTurn(6)).to.eql("Max wins");
    });
  });

  describe('playerOTurn', function() {
    it("changes the mark of the corresponding space to O", function() {
      var testPlayerX = new Player("Max", "X");
      var testPlayerO = new Player("Charlie", "O");
      var testBoard = new Board();
      testBoard.buildBoard();
      var testGame = new Game(testPlayerX, testPlayerO, testBoard);
      playerOTurn(6);
      expect(testGame.testBoard.spaces[6].mark).to.equal("O");
    });
  });

  describe('playerXTurn', function() {
    it("changes the mark of the corresponding space to X", function() {
      var testPlayerX = new Player("Max", "X");
      var testPlayerO = new Player("Charlie", "O");
      var testBoard = new Board();
      testBoard.buildBoard();
      var testGame = new Game(testPlayerX, testPlayerO, testBoard);
      playerXTurn(4);
      expect(testGame.testBoard.spaces[4].mark).to.equal("X");
    });
  });
});
