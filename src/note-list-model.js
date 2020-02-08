'use strict';

(function(exports) {
  function List() {
    this.array = []
  }

  List.prototype.newNote = function(text) {
    var id = this.array.length
    var note = new Note(text, id)
    this.array.push(note)
    return note;
  }

  exports.List = List;
})(this)
