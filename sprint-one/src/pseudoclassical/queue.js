var Queue = function() {
	
	this.storage = {};
	this.key = 0;
	this.deq = 0;
	this.objectSize = 0;

};

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
	};

	return this.objectSize;
}

var queue = new Queue;
