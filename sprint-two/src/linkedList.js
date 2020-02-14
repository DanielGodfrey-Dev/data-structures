var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    var currentHead = list.head;
    delete list.head;
    list.head = newHead;
    return currentHead.value;
  };

  list.contains = function(target) {
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
// addToTail --> O(1)
// removeHead --> O(1)
// contains --> O(n)
 */
