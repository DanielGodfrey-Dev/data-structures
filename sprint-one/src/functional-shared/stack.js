var Stack = function() {
  //generate object
  var stack = {};

  //assign properties
  stack.key = 0;
  stack.storage = {};

  //define or borrow methods
  //alternatively without _.extend:
  //stack.push = stackMethods.push;
  //etc... 
  _.extend(stack, stackMethods);

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


