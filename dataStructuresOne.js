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

// 8. In this exercise we are going to perform a union on two sets of data. We will create a method on our Set data structure called union. This method should take another Set as an argument and return the union of the two sets, excluding any duplicate values.

// For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the union of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].

class Set {
  constructor() {
    // This will hold the set
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
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // Only change code below this line
  union(setTwo) {
    const unionSet = new Set();
    this.values().forEach(value => {
      unionSet.add(value);
    });
    setTwo.values().forEach(value => {
      unionSet.add(value);
    });
    return unionSet;
  }
  // Only change code above this line
}

// 9. In this exercise we are going to perform an intersection on 2 sets of data. We will create a method on our Set data structure called intersection. An intersection of sets represents all values that are common to two or more sets. This method should take another Set as an argument and return the intersection of the two sets.

// For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the intersection of setA and setB is: setA.intersection(setB) = ['a', 'b'].


class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // Only change code below this line
  intersection(setB) {
    let sharedValues = new Set();
    this.values().forEach(value => {
      if (setB.has(value)) {
        sharedValues.add(value);
      }
    })
    return sharedValues;
  }
  // Only change code above this line
}

// 10. In this exercise we are going to perform a difference on 2 sets of data. We will create a method on our Set data structure called difference. A difference of sets should compare two sets and return the items present in the first set that are absent in the second. This method should take another Set as an argument and return the difference of the two sets.

// For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the difference of setA and setB is: setA.difference(setB) = ['c'].



class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // This is our intersection method
  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // Only change code below this line
  difference(set) {
    const differentValues = new Set();
    const sameValues = this.intersection(set);
    this.values().forEach(value => {
      if (!sameValues.has(value)) {
        differentValues.add(value);
      }
    })
    return differentValues;
  }
  // Only change code above this line
}

// 11. Perform a Subset Check on Two Sets of Data
// In this exercise, we are going to perform a subset test on 2 sets of data. We will create a method on our Set data structure called isSubsetOf. This will compare the first set against the second, and if the first set is fully contained within the second, it will return true.

// For example, if setA = ['a','b'] and setB = ['a','b','c','d'], then setA is a subset of setB, so setA.isSubsetOf(setB) should return true.

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // This is our intersection method
  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }

  difference(set) {
    const newSet = new Set();

    this.values().forEach(value => {
      if (!set.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
  // Only change code below this line
  isSubsetOf(set) {
    let intersectionSet = this.intersection(set);
    return intersectionSet.size() !== this.size() ? false : true;
  }
  // Only change code above this line
}

/**
 * 12. For this exercise, return a set with the following values: 1, 2, 3, 'Taco', 'Cat', 'Awesome'
 */

 function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line
  set.add('Taco');
  set.add('Cat');
  set.add('Awesome');
  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();

/**
 * 13. Now, create a set with the integers 1, 2, 3, 4, & 5.

Remove the values 2 and 5, and then return the set.
 */

 function checkSet(){
  // Only change code below this line
  var set = new Set([1, 2, 3, 4, 5]);
  set.delete(2);
  set.delete(5);
  // Only change code above this line
  return set;
}

/**
 * 14.In this exercise we will pass an array and a value to the checkSet() function. Your function should create an ES6 set from the array argument. Find if the set contains the value argument. Find the size of the set. And return those two values in an array.
 */

 function checkSet(arrToBeSet, checkValue){

  // Only change code below this line
  let set = new Set(arrToBeSet);
  return [set.has(checkValue), set.size];
  // Only change code above this line

}

/**
 * 15. In this exercise we will pass a set object to the checkSet function. It should return an array containing the values of the Set.

Now you've successfully learned how to use the ES6 Set() object, good job!
 */

function checkSet(set){
  // Only change code below this line
  return [...set];
  // Only change code above this line
}

/**
 * 16.var Map = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    this.collection[key] = value;
  }
  this.remove = (key) => {
    delete this.collection[key];
  }
  this.get = (key) => {
    return this.collection[key];
  }
  this.has = (key) => {
    return this.collection[key] ? true : false;
  }
  this.values = () => {
    let values = [];
    console.log(values);
    for (let key in this.collection) {
      values.push(this.collection[key]);
    }
    return values;
  }
  this.clear = () => {
    this.collection = {};
  }
  this.size = (key, value) => {
    let size = 0;
    for (let key in this.collection) {
      size++;
    }
    return size;
  }
  // Only change code above this line
};
 */

 var Map = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    this.collection[key] = value;
  }
  this.remove = (key) => {
    delete this.collection[key];
  }
  this.get = (key) => {
    return this.collection[key];
  }
  this.has = (key) => {
    return this.collection[key] ? true : false;
  }
  this.values = () => {
    let values = [];
    console.log(values);
    for (let key in this.collection) {
      values.push(this.collection[key]);
    }
    return values;
  }
  this.clear = () => {
    this.collection = {};
  }
  this.size = (key, value) => {
    let size = 0;
    for (let key in this.collection) {
      size++;
    }
    return size;
  }
  // Only change code above this line
};

/**
 * 17. Define a JavaScript Map object and assign to it a variable called myMap. Add the key, value pair freeCodeCamp, Awesome! to it.

 */

 let myMap = new Map()

 myMap.set('freeCodeCamp', 'Awesome!');


//  18. Let's create the basic functionality of a hash table. We've created a naive hashing function for you to use. You can pass a string value to the function hash and it will return a hashed value you can use as a key for storage. Store items based on this hashed value in the this.collection object. Create these three methods: add, remove, and lookup. The first should accept a key value pair to add to the hash table. The second should remove a key-value pair when passed a key. The third should accept a key and return the associated value or null if the key is not present.

Be sure to write your code to account for collisions!

Note: The remove method tests won't pass until the add and lookup methods are correctly implemented.

var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    let hashed = hash(key);
    let hasProp = false;

    if (!this.collection[hashed]) {
      this.collection[hashed] = [{[key]: value}];
    } else {
      for (let i = 0; i < this.collection[hashed].length; i++) {
        if (this.collection[hashed][i][key]) {
          hasProp = true;
          this.collection[hashed][i][key] = value;
        }
      }
       if(!hasProp) {
       this.collection[hashed].push({[key]: value});
      }
    }
    return this.collection[hashed];
  }

    this.remove = (key) => {
      let hashed = hash(key);
      if (this.collection[hashed]) {
        for (let i=0; i < this.collection[hashed].length; i++) {
          if (this.collection[hashed][i][key]) {
            this.collection[hashed].splice(i, 1);
          }
        }
        if (this.collection[hashed].length === 0) {
          delete this.collection[hashed];
        }
      }
    }

    this.lookup = (key) => {
      let hashed = hash(key);
    if (this.collection[hashed]) {
      for (let i = 0; i < this.collection[hashed].length; i++) {
        if (this.collection[hashed][i][key]) {
          return this.collection[hashed][i][key];
        }
      }
    } else {
      return null;
    }
  }
  // Only change code above this line
};

// 19. In our code editor, we've created two nodes, Kitten and Puppy, and we've manually connected the Kitten node to the Puppy node.

// Create a Cat and Dog node and manually add them to the line.

var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// Only change code below this line
let Cat = new Node('Cat');
let Dog = new Node('Dog');

Puppy.next = Cat;
Cat.next = Dog;

// 20. Write an add method that assigns the first node you push to the linked list to the head; after that, whenever adding a node, every node should be referenced by the previous node's next property.

// Note

// Your list's length should increase by one every time an element is added to the linked list.

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line

    if (head === null) {
      head =new Node(element);
    } else {
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    length++;
    // Only change code above this line
  };
}

// 21. Write a remove method that takes an element and removes it from the linked list.

// Note: The length of the list should decrease by one every time an element is removed from the linked list.

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    // Only change code below this line
    let node = new Node(element);
    if (node.element === head.element) {
      let newHead = head.next;
      head = newHead;
      length--;

    } else {
      let currentNode = head;

      while (currentNode.next) {
        let previousNode = currentNode;
        currentNode = currentNode.next;

        if (currentNode.element === node.element) {
          let newLink = currentNode.next;
          console.log(previousNode.next);
          previousNode.next = newLink;
        }
      }
    }
    // Only change code above this line
  };
}