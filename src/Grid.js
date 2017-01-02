function Grid() {
  this._index = [
      [new Tile(),new Tile(),new Tile()],
      [new Tile(),new Tile(),new Tile()],
      [new Tile(),new Tile(),new Tile()]
    ]
};

Grid.prototype.addNumberToTile = function (xGrid,yGrid, xTile, yTile, number) {
  var tile = this.retrieveTile(xGrid, yGrid)
  tile.addNumber(xTile, yTile, number)
};

Grid.prototype.retrieveTile = function (x,y) {
  return this._index[x][y]
};
