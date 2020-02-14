var Set = function() {
  var set = Object.create(setPrototype);
  set._key = 0;
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var check = false;
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      var check = true;
    }
  }
  if (check === false) {
    this._storage[this._key] = item;
    this._key++;
  }
};

setPrototype.contains = function(item) {

  var check = false;

  _.each(this._storage, function(element) {
    
    if (element === item) {
      check = true;
    }
  }); 

  return check;

};

setPrototype.remove = function(item) {

  for (var element in this._storage) {
    
    if (this._storage[element] === item) {
      delete this._storage[element];
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
  add --->      O(1)
  contains ---> O(n)
  removes --->  O(n)  [removes could be implemented with O(1) complexity, possibly]
 */
