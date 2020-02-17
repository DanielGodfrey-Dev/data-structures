var Queue = function() {
  //generate object
  queue = {};

  // assign values
  storage = {};
  key = 0;
  deq = 0;
  size = 0;

  //define methods
  queue.enqueue = function(value) {
    var string = value.toString();
    storage[key] = string;
    key++;
    size++;
  };

  queue.dequeue = function() {
    var deqqed = storage[deq];
    delete storage[deq];
    deq++;
    size--;
    return deqqed;
  };

  queue.size = function() {
    if (size <= 0) {
      return 0;
    }

    return size;
  };

  return queue;
};

//instantiation pattern: var newqueue = Queue();