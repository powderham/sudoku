function Tile() {
  this._row1 = [null,null,null]
  this._row2 = [null,null,null]
  this._row3 = [null,null,null]
}


Tile.prototype.row1 = function() {
  return this._row1
};

Tile.prototype.row2 = function() {
  return this._row2
};

Tile.prototype.row3 = function() {
  return this._row3
};
