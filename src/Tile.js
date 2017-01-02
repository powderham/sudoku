function Tile() {
  this._index = [[null,null,null],[null,null,null],[null,null,null]]
}


Tile.prototype.row = function (x) {
  return this._index[x]
};


Tile.prototype.addNumber = function (x,y,number) {
  if(this.existingNumbers().indexOf(number) === -1){
    this._index[x][y] = number
  } else {
    //do something to indicate unsuccessful - not error to keep programme running
  }
};

Tile.prototype.existingNumbers = function () {
  return this.removeNulls(this.flattenIndex())
};

Tile.prototype.flattenIndex = function (){
  return [].concat.apply([],this._index)
};

Tile.prototype.removeNulls = function (array) {
  var returnArray = []
  for (var num in array) {
    if (array[num] != null && returnArray.indexOf(array[num]) === -1){
      returnArray.push(array[num])
    }
  }
  return returnArray
};
