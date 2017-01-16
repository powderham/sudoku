describe("Grid", function() {
  var grid;

  beforeEach(function() {
      grid = new Grid();
  });

  describe("Static grid", function(){
    it("can tell a tile to add a number to itself", function(){
      grid.addNumberToTile(0,0,0,0,1)
      expect(grid.retrieveTile(0,0)._index[0][0]).toEqual(1)
    })

    it("can return all numbers in the same column", function(){
      grid.addNumberToTile(0,0,0,0,1)
      grid.addNumberToTile(0,0,1,0,2)
      grid.addNumberToTile(0,0,2,0,3)
      grid.addNumberToTile(1,0,0,0,4)
      grid.addNumberToTile(1,0,1,0,5)
      grid.addNumberToTile(1,0,2,0,6)
      grid.addNumberToTile(2,0,0,0,7)
      grid.addNumberToTile(2,0,1,0,8)
      grid.addNumberToTile(2,0,2,0,9)
      expect(grid.returnColumnNumbers(0,0,0,0)).toEqual([1,2,3,4,5,6,7,8,9])
    })

    it("can return all numbers in the same row", function(){
      grid.addNumberToTile(0,0,0,0,1)
      grid.addNumberToTile(0,0,0,1,2)
      grid.addNumberToTile(0,0,0,2,3)
      grid.addNumberToTile(0,1,0,0,4)
      grid.addNumberToTile(0,1,0,1,5)
      grid.addNumberToTile(0,1,0,2,6)
      grid.addNumberToTile(0,2,0,0,7)
      grid.addNumberToTile(0,2,0,1,8)
      grid.addNumberToTile(0,2,0,2,9)
      expect(grid.returnRowNumbers(0,0,0,0)).toEqual([1,2,3,4,5,6,7,8,9])
    })
  })

  describe("Gameplay grid", function(){
    it("can return possible numbers for input in a square", function(){
      grid.addNumberToTile(0,0,0,0,1)
      grid.addNumberToTile(1,0,1,1,2)
      grid.addNumberToTile(0,1,1,1,3)
      grid.print()
      expect(grid.availableNumbers(0,0,1,1)).toEqual([4,5,6,7,8,9])
    })
  })
});
