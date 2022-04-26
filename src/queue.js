// const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
    constructor() {
    this.top = null;
    this.bot = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    newNode.value = value;
    if (this.top === null) {
      this.top = newNode;
      this.bot = newNode;
    } else {
      this.bot.next = newNode;
      this.bot = newNode;
    }
    this.capacity++;
  }

  dequeue() {
    const cur = this.top;
    this.top = this.top.next;
    this.length--;
    cur.next = null;
    return cur.value;
  }

}


module.exports = {
  Queue
};
