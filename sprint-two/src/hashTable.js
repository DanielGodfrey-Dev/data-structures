

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if no element at index
  if (!Array.isArray(this._storage.get(index))) { 
    // create an array and push [index, v] into it
    this._storage.set(index, [[k, v]]);
  } else {
  // else push [index, v] into array
    var bucket = this._storage.get(index);
    var tuple = [k, v];
    var check = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i] = tuple;
        check = true;
      }  
    }
    if (check === false) {
      bucket.push(tuple);
    }
    this._storage.set(index, bucket);
  } 
  console.log(this._storage.get(index));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};

var myTable = new HashTable();
console.log(myTable._storage);
/*
 * Complexity: What is the time complexity of the above functions?
 */


