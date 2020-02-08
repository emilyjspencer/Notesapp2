
  (function testNoteTakesText() {
    var note = new Note('My favourite language is JavaScript', 0)

    assert.isTrue(note.showText() === 'My favourite language is JavaScript');
    assert.isTrue(note.id === 0)
  

})();
