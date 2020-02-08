var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  
  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) { 
  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } 
  if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }   
};

binaryTreeMethods.contains = function(value) {
  var isPresent = false;
  var checkIfIsPresent = function(value, node) {
    if (node.value === value) {
      isPresent = true;
    }
    if (node.left) {
      checkIfIsPresent(value, node.left);
    }
    if (node.right) {
      checkIfIsPresent(value, node.right);
    }
  };
  checkIfIsPresent(value, this);
  return isPresent;

};
binaryTreeMethods.depthFirstLog = function(cb) { 

  var checkIfIsPresent = function(node) {
    cb(node.value);
    if (node.left) {
      checkIfIsPresent(node.left);
    }
    if (node.right) {
      checkIfIsPresent(node.right);
    }
  };
  checkIfIsPresent(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
insert ---> O(n)
contains ---> O(n)
depthFirstLog ---> O(n)
 */
