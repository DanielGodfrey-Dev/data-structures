var Stack = function() {
  
  var someInstance = {};

  // Use an object with numeric keys to store values
  var key = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    key--;
    var popped = storage[key];
    delete storage[key];
    return popped;
  };

  someInstance.size = function() {
    if (key <= 0) {
      return 0;
    }
      return key;
  };

  return someInstance;
};
