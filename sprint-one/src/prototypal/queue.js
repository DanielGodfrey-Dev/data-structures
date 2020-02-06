var Queue = function() {
  
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.key = 0;
  someInstance.deq = 0;
  someInstance.objectSize = 0;

  return someInstance;

};

var queueMethods = {

	enqueue: function(value) {
		var string = value.toString;
		this.storage[this.key] = value;
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


