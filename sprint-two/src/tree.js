var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {  
// create a newTree with value of value
  var node = Tree(value);
//push that into 
  this.children.push(node);
};

treeMethods.contains = function(target) {
  // check parent node
  if (this.value === target) {
    return true;
  }
  // loop through children
  for (var i = 0; i < this.children.length; i++) {
    // if contains return
    // else keep looping
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    } else {
      child.contains(target);
    }
  }
  return false;
  // call same check on children
};



/*
 * Complexity: What is the time complexity of the above functions?
// addChild --> O(1)
// contain --> n^2
 */

