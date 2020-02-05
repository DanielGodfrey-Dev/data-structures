var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var key = 0;

  someInstance.push = function(value) {
    storage[key] = value;
    key++
  };

  someInstance.pop = function() {
    delete storage[key];
    key--;
  };

  someInstance.size = function() {
    if (key <= 0) {
      return 0;
    }
      return key;
  };

  return someInstance;
};
