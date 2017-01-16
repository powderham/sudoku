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
      array.push(tile._index[tileRow][yTile])
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

Grid.prototype.availableNumbers = function (xGrid, yGrid, xTile, yTile) {
  var allNumbers = [1,2,3,4,5,6,7,8,9]
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

  array = this.cleanNulls(this.returnRowNumbers(0,1,0,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(0,1,1,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(0,1,2,0))
  this.printRow(array)
  console.log("┣━━━╋━━━╋━━━╋━━━╋━━━╋━━━╋━━━╋━━━╋━━━┫")

  array = this.cleanNulls(this.returnRowNumbers(0,2,0,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(0,2,1,0))
  this.printRow(array)
  console.log("┣───┼───┼───┃───┼───┼───┃───┼───┼───┫")

  array = this.cleanNulls(this.returnRowNumbers(0,2,2,0))
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
  for (i = 0; i <= 2; i++){
    for (j = 0; j<=2; j++){
      for(v = 0; v<=2; v++){
        for(w = 0; w<=2; w++){
          this.input([i],[j],[v],[w])
        }
      }
    }
  }
}

Grid.prototype.input = function (xGrid, yGrid, xTile, yTile) {
  availableNumbersList = this.availableNumbers(xGrid, yGrid, xTile, yTile)
  if (availableNumbersList.length == 1 && this.retrieveTile(xGrid,yGrid)._index[xTile][yTile] == null){
    console.log(xGrid, yGrid, xTile, yTile)
    console.log(availableNumbersList)
    this.addNumberToTile(xGrid, yGrid, xTile, yTile, availableNumbersList[0])
  }
};
