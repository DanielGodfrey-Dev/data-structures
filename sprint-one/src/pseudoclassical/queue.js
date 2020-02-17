var Queue = function() {

  //assign properties
  this.storage = {};
  this.key = 0;
  this.deq = 0;
  this.objectSize = 0;

};

//add methods to delegated fallback object
Queue.prototype.enqueue = function(value) {
  var string = value.toString();
  this.storage[this.key] = value;
  this.key++;
  this.objectSize++;
};

Queue.prototype.dequeue = function() {
  var deqqed = this.storage[this.deq];
  delete this.storage[this.deq];
  this.deq++;
  this.objectSize--;
  return deqqed;
};

Queue.prototype.size = function() {
  if (this.objectSize <= 0) {
    return 0;
  }
  return this.objectSize;
};

//instantiation pattern: var newQueue = new Queue();
//the 'new' keyword takes the places of 'Object.create(...) and the return statement'
//functions are defined with [class name].prototype.[function name]

