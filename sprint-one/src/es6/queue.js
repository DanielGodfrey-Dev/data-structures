class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

  this.storage = {};
  this.key = 0;
  this.deq = 0;
  this.objectSize = 0;

  }

  enqueue(value) {
  	var string = value.toString;
	this.storage[this.key] = value;
	this.key++;
	this.objectSize++;
  }

  dequeue() {
	var deqqed = this.storage[this.deq];
	delete this.storage[this.deq];
	this.deq++;
	this.objectSize--;
	return deqqed;
  }

  size() {
  	if (this.objectSize <= 0) {
  		return 0;
  	}

  	return this.objectSize;
  }

};

var someInstance = new Queue;
