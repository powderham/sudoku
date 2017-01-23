function Grid() {
  this._index = [
      [new Tile(),new Tile(),new Tile()],
      [new Tile(),new Tile(),new Tile()],
      [new Tile(),new Tile(),new Tile()]
    ]
  this.ONETONINE = [1,2,3,4,5,6,7,8,9]
};

Grid.prototype.setup = function (array) {
  c = 0
  for (g = 0; g <= 2; g++){
    for (t = 0; t <= 2; t++){
      subarray = array[c]
      this.addRow(g,t,subarray);
      c += 1;
    }
  }
};

Grid.prototype.addNumberToTile = function (xGrid,yGrid, xTile, yTile, number) {
  var tile = this.retrieveTile(xGrid, yGrid)
  tile.addNumber(xTile, yTile, number)
};

Grid.prototype.addRow = function(grid,tile,[one,two,three,four,five,six,seven,eight,nine]){
    tiles = this._index[grid]
    count = 0
    input = [[one,two,three],[four,five,six],[seven,eight,nine]]
    for (var t in tiles){
      tiles[t]._index[tile] = input[count]
      count++;
    }
}

Grid.prototype.retrieveTile = function (x,y) {
  return this._index[x][y]
};

Grid.prototype.returnColumnNumbers = function (xGrid, yGrid, xTile, yTile) {
  var array = []
  for (var gridRow in this._index ){
    var tile = this.retrieveTile([gridRow],[yGrid])
    for (var tileRow in tile._index){
      array.push(tile._index[tileRow][yTile])
    }
  }
  return array
};

Grid.prototype.returnRowNumbers = function (xGrid, yGrid, xTile, yTile) {
  var array = []
  var row = this._index[xGrid]
  for (var gridRow in row){
    var tile = this._index[xGrid][gridRow]
    for (var index in tile._index[xTile]){
      array.push(tile._index[xTile][index])
    }
  }
  return array
};

Grid.prototype.availableNumbers = function (xGrid, yGrid, xTile, yTile) {
  var allNumbers = this.ONETONINE
  var currentNumbers = []
  var workingNumbers = []


  workingNumbers = this.returnRowNumbers(xGrid, yGrid, xTile, yTile)
  for (var number in workingNumbers){
    if(currentNumbers.indexOf(workingNumbers[number]) === -1){
      currentNumbers.push(workingNumbers[number])
    }
  }
  workingNumbers = this.returnColumnNumbers(xGrid, yGrid, xTile, yTile)
  for (var number in workingNumbers){
    if(currentNumbers.indexOf(workingNumbers[number]) === -1){
      currentNumbers.push(workingNumbers[number])
    }
  }
  workingNumbers = this.retrieveTile(xGrid, yGrid).existingNumbers()
  for (var number in workingNumbers){
    if(currentNumbers.indexOf(workingNumbers[number]) === -1){
      currentNumbers.push(workingNumbers[number])
    }
  }
  for (var i in currentNumbers){
    index = allNumbers.indexOf(currentNumbers[i])
    if (index > -1){
      allNumbers.splice(index, 1)
    }
  }
  return allNumbers
};

Grid.prototype.print = function () {

  console.log("┏━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┳━━━┓")

  array = this.cleanNulls(this.returnRowNumbers(0,0,0,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(0,0,1,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(0,0,2,0))
  this.printRow(array)
  console.log("┣━━━╋━━━╋━━━╋━━━╋━━━╋━━━╋━━━╋━━━╋━━━┫")

  array = this.cleanNulls(this.returnRowNumbers(1,0,0,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(1,0,1,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(1,0,2,0))
  this.printRow(array)
  console.log("┣━━━╋━━━╋━━━╋━━━╋━━━╋━━━╋━━━╋━━━╋━━━┫")

  array = this.cleanNulls(this.returnRowNumbers(2,0,0,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(2,0,1,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(2,0,2,0))
  this.printRow(array)
  console.log("┗━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┻━━━┛")
};

Grid.prototype.cleanNulls = function (array) {
  for (var number in array){
    if(array[number] === null){
      array[number] = " "
    }
  };
  return array
};

Grid.prototype.printRow = function (row) {
  console.log("┃ "+row[0]+" │ "+row[1]+" │ "+row[2]+" ┃ "+row[3]+" │ "+row[4]+" │ "+row[5]+" ┃ "+row[6]+" │ "+row[7]+" │ "+row[8]+" ┃")
};

Grid.prototype.solve = function () {
  count = 0
  for (i = 0; i <= 2; i++){
    for (j = 0; j<=2; j++){
      for(v = 0; v<=2; v++){
        for(w = 0; w<=2; w++){
          count += this.inputSolve([i],[j],[v],[w])
        }
      }
    }
  }
  if (count == 0){
    return false
  } else if (this.isComplete() == true) {
    return true
  } else {
    this.solve()
  }
};

Grid.prototype.inputSolve = function (xGrid, yGrid, xTile, yTile) {
  availableNumbersList = this.availableNumbers(xGrid, yGrid, xTile, yTile)
  if (availableNumbersList.length == 1 && this.retrieveTile(xGrid,yGrid)._index[xTile][yTile] == null){
    this.addNumberToTile(xGrid, yGrid, xTile, yTile, availableNumbersList[0])
    return 1
  } else {
    return 0
  }
};

Grid.prototype.isComplete = function () {
  count = 0
  for (var row in this._index){
    for (var tile in this._index[row]){
      if (!this._index[row][tile].isComplete()){
        return false
      }
    }
  }
  return true
};



Grid.prototype.containsOneToNine = function (array) {
  complete = this.ONETONINE
  current = []
  for (var index in array){
    current.push(array[index])
  }
  if (this.equalArrays(current, complete)){
    return true
  } else {
    return false
  }
};

Grid.prototype.equalArrays = function (a1, a2) {
  a1 = a1.sort()
  a2 = a2.sort()
  return (a1.length==a2.length && a1.every(function(v,i) { return v === a2[i]}))
};
