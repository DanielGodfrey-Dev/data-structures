var Stack = function() {

  //assign properties
  this.storage = {};
  this.key = 0;

};

//add methods to delegated fallback object
Stack.prototype.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

Stack.prototype.pop = function() {
  this.key--;
  var popped = this.storage[this.key];
  delete this.storage[this.key];
  return popped;
};

Stack.prototype.size = function() {
  if (this.key <= 0) {
    return 0;
  }

  return this.key;
};

//instantiation pattern: var newStack = new Stack();
//the 'new' keyword takes the places of 'Object.create(...) and the return statement'
//functions are defined with [class name].prototype.[function name]