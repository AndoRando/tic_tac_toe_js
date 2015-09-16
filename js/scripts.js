function Player(name, type) {
  this.name = name;
  this.type = type;
};

function Space(xCoordinate, yCoordinate, mark) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.mark = mark;
};

function Board() {
  this.spaces = [];
};

// Build a new space object for each x and y coordinate combo,
// then push them into the Board's spaces array as they're made.

Board.prototype.buildBoard = function() {
  for (var y = 1; y < 4; y++) {
    for (var x = 1; x < 4; x++) {
      this.spaces.push(new Space(x, y));
    };
  };
};

// Creates a game with two instances of Player and an instance of Board

function Game(playerX, playerO, board) {
  this.playerX = playerX;
  this.playerO = playerO;
  this.board = board;
};

// Takes a turn for player X by marking the clicked spot with X and asking
// if victory was obtained

Game.prototype.playerXTurn = function(space) {
  this.space = space;
  this.board.spaces[space].mark = "X";
  this.victory(space);
}

// Takes a turn for player O by marking the clicked spot with X and asking
// if victory was obtained

Game.prototype.playerOTurn = function(space) {
  this.space = space;
  this.board.spaces[space].mark = "O";
  this.victory(space);
}

// Determining whether or not horizontal, vertical, or diagonal victory was
// obtained based on a changed space.

Game.prototype.victory = function(clicked) {
  // What space was clicked?
  this.clicked = clicked;

  // spaces with the same xcoordinate as 4
  //   do they all have the same mark?
  //     yes? Victory.
  // spaces with the same ycoordinate as 4
  //   do they all have the same mark?
  //     yes? Victory.
  // spaces with diagonal relation to 4
  //   do they all have the same mark?
  //     yes? Victory.
  //     no? next player turn
}
