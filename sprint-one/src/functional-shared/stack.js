var Stack = function() {
  	
  	var someInstance = {};

  	someInstance.key = 0;
  	someInstance.storage = {};

  	_.extend(someInstance, stackMethods);

  	return someInstance;

};

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


