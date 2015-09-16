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

Board.prototype.buildBoard = function() {
  for (var y = 1; y < 4; y++) {
    for (var x = 1; x < 4; x++) {
      this.spaces.push(new Space(x, y));
    };
  };
};
