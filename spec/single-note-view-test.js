

(function TestSingleNoteViewInstantiation() {
  var list = new List()
  var note = list.newNote("Favourite drink: seltzer")
  var noteView = new NoteView(note)


  assert.isTrue(noteView.note instanceof Note)
  
})();

(function TestReturnString() {
  var list = new List()
  var note = list.newNote("Favourite drink: seltzer")
  var noteView = new NoteView(note)
  assert.isTrue(noteView.returnString() === "<div>Favourite drink: seltzer</div>")

})();