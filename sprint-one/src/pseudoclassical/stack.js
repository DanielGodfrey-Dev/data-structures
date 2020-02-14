var Stack = function() {

  this.storage = {}
  this.key = 0;

};

Stack.prototype.push = function(value) {
	this.storage[this.key] = value;
	this.key++;
};

Stack.prototype.pop = function() {
	this.key--;
	var popped = this.storage[this.key];
	delete this.storage[this.key];
	return popped;
};

Stack.prototype.size = function() {
	if (this.key <= 0) {
		return 0;
	}

	return this.key;
};

var stack = new Stack;