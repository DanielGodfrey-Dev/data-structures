

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if no element at index
//console.log(this._storage);
  if (!Array.isArray(this._storage.get(index))) { 
    // create an array and push [index, v] into it
    this._storage.set(index, [[k, v]]);
  } else {
  // else push [index, v] into array
    var arrAtIndex = this._storage.get(index);
    arrAtIndex.push([k, v]);
    this._storage.set(index, arrAtIndex);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

var myTable = new HashTable();
console.log(myTable._storage);
/*
 * Complexity: What is the time complexity of the above functions?
 */


