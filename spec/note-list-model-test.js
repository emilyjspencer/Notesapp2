
  (function testArrayReturnsNotes() {
    var list = new List();
    list.newNote("Favourite drink: seltzer")
    
    assert.isTrue(list.array[0] === 'Favourite drink: seltzer');

})(this);
