'use strict';

(function(exports) {
function NoteView(note) {
    this.note = note;

}

NoteView.prototype.returnString = function() {
  var string = "<div>" + this.note.text + "</div>"
  return string
}


exports.NoteView = NoteView
})(this);