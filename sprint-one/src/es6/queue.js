class Queue {
  
  //generate object and assign properties
  constructor() {

    this.storage = {};
    this.key = 0;
    this.deq = 0;
    this.objectSize = 0;

  }

  //define methods
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

}

//instantiation pattern: var newQueue = new Queue();