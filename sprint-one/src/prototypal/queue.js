var Queue = function() {
  //generate object
  var queue = Object.create(queueMethods);

  //assign properties
  queue.storage = {};
  queue.key = 0;
  queue.deq = 0;
  queue.objectSize = 0;

  return queue;

};

//add methods to delegated fallback object
//defined shared methods (below is es6 style)
var queueMethods = {

  enqueue: function(value) {
    var string = value.toString();
    this.storage[this.key] = string;
    this.key++;
    this.objectSize++;
  },

  dequeue: function() {
    var deqqed = this.storage[this.deq];
    delete this.storage[this.deq];
    this.deq++;
    this.objectSize--;
    return deqqed;
  },

  size: function() {
    if (this.objectSize <= 0) {
      return 0;
    }

    return this.objectSize;
  }

};

//instantiation pattern: var newqueue = Queue();


