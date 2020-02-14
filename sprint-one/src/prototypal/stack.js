var Stack = function() {
  
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.key = 0;

  return someInstance;

};

var stackMethods = {

	push: function (value) {
		this.storage[this.key] =  value;
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


