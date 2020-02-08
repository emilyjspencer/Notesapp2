
  (function testArrayReturnsNotes() {
    var list = new List();
    list.newNote("Favourite food: pesto")
    list.newNote("Favourite drink: seltzer")

    assert.isTrue(list.array[0].text === 'Favourite food: pesto');
    assert.isTrue(list.array[1].text === 'Favourite drink: seltzer');
})();

(function testAddsNoteId() {
    var list = new List();
    list.newNote("Favourite drink: seltzer")
    
    assert.isTrue(list.array[0].id === 0);
})();
