class Stack {
  
  //generate object and assign properties
  constructor() {
    this.storage = {};
    this.key = 0;
  }

  //define methods
  push(value) {
    this.storage[this.key] = value;
    this.key++;
  }

  pop() {
    this.key--;
    var popped = this.storage[this.key];
    delete this.storage[this.key];
    return popped;
  }

  size() {
    if (this.key < 0) {
      return 0;
    }
    return this.key;
  }

}

//instantiation pattern: var newStack = new Stack();