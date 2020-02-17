var Stack = function() {
  //generate object
  var stack = {};

  // assign properties
  stack.key = 0;
  stack.storage = {};

  // define methods
  stack.push = function(value) {
    stack.storage[stack.key] = value;
    stack.key++;
  };

  stack.pop = function() {
    stack.key--;
    var popped = stack.storage[stack.key];
    delete stack.storage[stack.key];
    return popped;
  };

  stack.size = function() {
    if (stack.key <= 0) {
      return 0;
    }
    return stack.key;
  };

  return stack;
};

//instantiation pattern: var newStack = Stack();