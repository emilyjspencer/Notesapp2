'use strict';

(function(exports) {
  function Controller() {
    this.view = new View()
    this.list = new List()
  }

  Controller.prototype.addNote = function(text) {
    this.list.newNote(text)
  }

  Controller.prototype.inputArray = function() {
    this.view.inputList(this.list)
    this.view.modifyElements()
  }

  Controller.prototype.createString = function() {
    return (this.view.createString())
  }

  Controller.prototype.printApp = function(doc = document) {
    var string = this.createString()
    document.getElementById('app').innerHTML = string
  }

  exports.Controller = Controller
})(this);
