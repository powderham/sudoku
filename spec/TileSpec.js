describe("Tile", function() {
  var tile;

  beforeEach(function() {
      var tile = new Tile();
    });

  it("should contain 3 individual rows", function(){
    expect(tile.row1).toBeTruthy
    expect(tile.row2).toBeTruthy
    expect(tile.row3).toBeTruthy
  })

  it("should contain 3 individual rows with three data points", function(){
    expect(tile.row1).toBe([null,null,null])
    expect(tile.row2).toBe([null,null,null])
    expect(tile.row3).toBe([null,null,null])
})

});
