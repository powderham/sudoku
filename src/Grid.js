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

Grid.prototype.returnColumnNumbers = function (xGrid, yGrid, xTile, yTile) {
  var array = []
  for (var gridRow in this._index ){
    var tile = this._index[gridRow][xGrid]
    for (var tileRow in tile._index){
      array.push(tile._index[tileRow][yGrid])
    }
  }
  return array
};

Grid.prototype.returnRowNumbers = function (xGrid, yGrid, xTile, yTile) {
  var array = []
  var row = this._index[yGrid]
  for (var gridRow in row){
    var tile = this._index[yGrid][gridRow]
    for (var index in tile._index[xTile]){
      array.push(tile._index[xTile][index])
    }
  }
  return array
};
