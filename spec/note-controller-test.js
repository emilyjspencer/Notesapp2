(function TestControllerInitiation() {
  var controller = new Controller()

  assert.isTrue(controller.view instanceof View)
  assert.isTrue(controller.list instanceof List)

})();

(function TestControllerAddsNote() {
  var controller = new Controller()
  controller.addNote("Hi")

  assert.isTrue(controller.list.array[0].text === "Hi")
})();

(function TestControllerInputsArray() {
  var controller = new Controller()
  controller.addNote("Hi")
  controller.inputArray()

  assert.isTrue(controller.view.array.length === 1)
  assert.isTrue(controller.view.array[0].text === "Hi")
})();

(function TestControllerCreatesString() {
  var controller = new Controller()
  controller.addNote("Hi")
  controller.inputArray()

  if (controller.createString() !== "<ul><li><div>Hi</div></li></ul>") {
    throw new Error("Assertion is not truthy")
  } else {
    console.log("Test passes")
  }
})();

(function TestControllerPrintsString() {
  var controller = new Controller()
  controller.addNote("Test")
  controller.inputArray()

  var element = document.createElement('div');
  element.setAttribute('id', 'app');
  controller.printApp();

  assert.isTrue(document.getElementById('app').innerHTML.includes("Test"))
})();

(function TestControllerMocksDocument() {
  var controller = new Controller()
  controller.addNote("Test")
  controller.inputArray()

  var fakeDiv = {
    innerHTML: ""
  }
  
  var fakeDocument = {
    getElementById: function() {
      return fakeDiv
    }
  }
  
  controller.printApp(fakeDocument)

  var element = document.createElement('div');
  element.setAttribute('id', 'app');
  controller.printApp();

  assert.isTrue(document.getElementById('app').innerHTML.includes("Test"))
})();
