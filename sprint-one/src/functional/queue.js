var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  var deq = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var string = value.toString();
    storage[key] = string;
    key++;
    size++;
  };

  someInstance.dequeue = function() {
    var deqqed = storage[deq];
    delete storage[deq];
    deq++;
    size--;
    return deqqed;
  };

  someInstance.size = function() {
    if (size <= 0) {
      return 0;
    }

    return size;
  };

  return someInstance;
};
