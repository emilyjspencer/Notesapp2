
  (function testNoteTakesText() {
    var note = new Note()
    note.insertText('My favourite language is JavaScript')

    assert.isTrue(note.text === 'My favourite language is JavaScript');
  

})();
