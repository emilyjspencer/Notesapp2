'use strict';

(function(exports) {
  function View() {
    this.array = null
    this.string = null
    this.newArray = []
  }

  View.prototype.inputList = function(noteList) {
    this.array = noteList.array
  }

  View.prototype.modifyElements = function() {
    var newArray = []
    this.array.forEach(function(element) {
      var newElement = element.slice(0, 20);
      newArray.push(newElement);
    })
    this.newArray = newArray
  }

  View.prototype.createString = function() {
    this.string = '<ul><li><div>' + this.newArray.join('</div></li><li><div>') + '</div></li></ul>'
    return this.string
  }
  
  exports.View = View
})(this);
