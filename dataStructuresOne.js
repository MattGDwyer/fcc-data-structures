// 1. First create a buffer that is 64-bytes. Then create a Int32Array typed array with a view of it called i32View.

var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);

// 2. Here we have a stack of homework assignments represented as an array: "BIO12" is at the base, and "PSY44" is at the top of the stack.
// Modify the given array and treat it like a stack using the JavaScript methods mentioned above. Remove the top element "PSY44" from the stack. Then add "CS50" to be the new top element of the stack.

var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line
homeworkStack.pop();
homeworkStack.push('CS50');

// 3. Write a push method that pushes an element to the top of the stack, a pop method that removes and returns the element on the top of the stack, a peek method that looks at the top element in the stack, an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack. Normally stacks don't have this, but we've added a print helper method that console logs the collection.

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  this.push = function(item) {
    collection.push(item);
  };
  this.pop = function() {
    return collection.pop();
  };
  this.peek = function() {
    return collection[collection.length - 1];
  }
  this.isEmpty = function() {
    return !!(!collection.length);
  }
  this.clear = function() {
    collection = [];
  };
  // Only change code above this line
}

// 4. Write an enqueue method that pushes an element to the tail of the queue, a dequeue method that removes and returns the front element, a front method that lets us see the front element, a size method that shows the length, and an isEmpty method to check if the queue is empty.

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = (item) => {
    collection.push(item);
  };
  this.dequeue = () => {
    return collection.shift();
  };
  this.front = () => {
    return collection[0];
  };
  this.size = (item) => {
    return collection.length;
  };
  this.isEmpty = (item) => {
    return !!(!this.size);
  };
  // Only change code above this line
}


// 5. We’ve started writing a PriorityQueue in the code editor. You will need to add an enqueue method for adding items with a priority, a dequeue method for removing and returning items, a size method to return the number of items in the queue, a front method to return the element at the front of the queue, and finally an isEmpty method that will return true if the queue is empty or false if it is not.

// The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. dequeue and front should return only the item's name, not its priority.
function PriorityQueue () {

  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = (item) => {
    let contains = false;
    for (let i = 0; i < this.collection.length; i++) {
      if (item[1] < this.collection[i][1]) {
        this.collection.splice(i, 0, item);
        contains = true;
        break;
      }
    }
    if (!contains) {
      this.collection.push(item);
    }
  };
  this.dequeue = () => {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "Collection is Empty"
    }
  };
  this.size = () => {
    return this.collection.length;
  };
  this.front = () => {
    return this.collection[0][0];
  };
  this.isEmpty = () => {
    return this.collection.length === 0;
  };
  // Only change code above this line
}

