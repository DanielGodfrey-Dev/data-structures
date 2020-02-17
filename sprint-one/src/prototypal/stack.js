var Stack = function() {
  //generate object
  var stack = Object.create(stackMethods);

  //assign properties
  stack.storage = {};
  stack.key = 0;

  return stack;

};

//add methods to delegated fallback object
//defined shared methods (below is es6 style)
var stackMethods = {

  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },

  pop: function() {
    this.key--;
    var popped = this.storage[this.key];
    delete this.storage[this.key];
    return popped;
  },

  size: function() {
    if (this.key <= 0) {
      return 0;
    }
    return this.key;
  }

};

//instantiation pattern: var newStack = Stack();


