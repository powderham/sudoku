function Tile() {
  this._index = [[null,null,null],[null,null,null],[null,null,null]]
}


Tile.prototype.row = function (x) {
  return this._index[x]
};


Tile.prototype.addNumber = function (x,y,number) {
  this._index[x][y] = number
};

Title.prototype.existingNumbers = function () {
  
};
