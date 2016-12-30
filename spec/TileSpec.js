describe("Tile", function() {
  var tile;

  beforeEach(function() {
      tile = new Tile();
    });

  it("should contain 3 individual rows", function(){
    expect(tile.row0()).toBeTruthy()
    expect(tile.row1()).toBeTruthy()
    expect(tile.row2()).toBeTruthy()
  })

  it("should contain 3 individual rows with three data points", function(){
    expect(tile.row0()).toEqual([null,null,null])
    expect(tile.row1()).toEqual([null,null,null])
    expect(tile.row2()).toEqual([null,null,null])
})

  it("should allow numbers to be input in to the tile", function(){
    tile.addNumber(0,0,1)
    expect(tile.row1()[0]).toEqual(1)
  })

  it("should be able to return existing values", function(){
    expect(tile.existingNumbers()).toEqual([])
  })

});
