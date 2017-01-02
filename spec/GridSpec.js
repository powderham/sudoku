describe("Grid", function() {
  var grid;

  beforeEach(function() {
      grid = new Grid();
  });

  it("can tell a tile to add a number to itself", function(){
    grid.addNumberToTile(0,0,0,0,1)
    expect(grid.retrieveTile(0,0)._index[0][0]).toEqual(1)
  })
});
