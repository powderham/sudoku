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

Tile.prototype.isComplete = function () {
  complete = [1,2,3,4,5,6,7,8,9]
  current = this.existingNumbers()
  if (this.equalArrays(current, complete)){
    return true
  } else {
    return false
  }
};

Tile.prototype.equalArrays = function (a1, a2) {
  a1 = a1.sort()
  a2 = a2.sort()
  return (a1.length==a2.length && a1.every(function(v,i) { return v === a2[i]}))
};
