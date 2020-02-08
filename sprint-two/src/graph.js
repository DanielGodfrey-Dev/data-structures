

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!_.contains(this.nodes, node)) {
    this.nodes.push(node);
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  var check = false;

  this.nodes.forEach(function(item) {
    if (item === node) {
      check = true;
    }
  });

  return check;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  if (_.contains(this.nodes, node)) {
    this.nodes.splice(this.nodes.indexOf(node), 1);
  }
  //remove edge connections!!
  var arrOfItemsToRemove = [];
  this.edges.forEach(function(item) {
    if (item.indexOf(node !== -1)) {
      arrOfItemsToRemove.push(item);
    }
  });
  for (var i = 0; i < arrOfItemsToRemove.length; i++) {
    this.edges.splice(this.edges.indexOf(arrOfItemsToRemove[i]), 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  var check = false;

  this.edges.forEach(function(item) {
    if (fromNode.toString() + toNode.toString() === item || toNode.toString() + fromNode.toString() === item) {
      check = true;
    }
  });
  
  return check;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  //generate a binary array (two string character?) as [fromNode, toNode]?

  this.edges.push(fromNode.toString() + toNode.toString());

  //push to the object edges storage

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  //if edge element in storage contains both fromNode and toNode values, delete it from edge storage
  this.edges.splice(this.edges.indexOf(fromNode.toString() + toNode.toString()), 1);


};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

var myGraph = new Graph;

/*
 * Complexity: What is the time complexity of the above functions?
// add --> O(1)
// contains --> O(n)
// remove --> O(n)
// hasEdge --> O(n)
// addEdge --> O(1)
// removeEdge --> O(1)
// forEachNode --> O(n) 
 */


