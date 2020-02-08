(function testReturnsHTMLList() {
  var list = new List()
  list.newNote("Favourite food: pesto")
  list.newNote("Favourite drink: seltzer")
  var view = new View()
  view.inputList(list)
  view.modifyElements()
  assert.isTrue(view.createString() === "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>")
})();
