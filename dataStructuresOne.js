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

// 6. In this challenge we will implement a circular queue. The circular queue should provide enqueue and dequeue methods which allow you to read from and write to the queue. The class itself should also accept an integer argument which you can use to specify the size of the queue when created. We've written the starting version of this class for you in the code editor.

// When you enqueue items to the queue, the write pointer should advance forward and loop back to the beginning once it reaches the end of the queue. The enqueue method should return the item you enqueued if it is successful; otherwise it will return null.

// Likewise, the read pointer should advance forward as you dequeue items. When you dequeue an item, that item should be returned. If you cannot dequeue an item, you should return null.

// The write pointer should not be allowed to move past the read pointer (our class won't let you overwrite data you haven't read yet) and the read pointer should not be able to advance past data you have written.

class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) {
      this.write = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      console.log(this.read)
      if (this.read > this.max) {
        this.read = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }
}

// 7. First, we will create an add method that adds a value to our set collection as long as the value does not already exist in the set. Then we will create a remove method that removes a value from the set collection if it already exists. And finally, we will create a size method that returns the number of elements inside the set collection.

// Create an add method that adds a unique value to the set collection and returns true if the value was successfully added and false otherwise.

// Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return true. Otherwise, it should return false. Create a size method that returns the size of the set collection.

class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(item) {
    if (this.has(item)) {
      return false;
    } else {
      this.dictionary[item] = item;
      this.length++;
      return true;
    }
  }

  remove(value) {
    if (this.has(value)) {
      this.length--;
      delete this.dictionary[value];
      return true;
    }
    return false;
  }
  size() {
    // console.log('poo', this.length);
    return this.length;
  }
  // Only change code above this line
}