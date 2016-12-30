function Tile() {
  this._row0 = [null,null,null]
  this._row1 = [null,null,null]
  this._row2 = [null,null,null]
}


Tile.prototype.row0 = function() {
  return this._row0
};

Tile.prototype.row1 = function() {
  return this._row1
};

Tile.prototype.row2 = function() {
  return this._row2
};

Tile.prototype.addNumber = function (x,y,number) {
  console.log(eval("this._row"+x))
};
