const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  while (l.value === k) {
    l = l.next
  }
  let prev = null
  let cur = l
  while(true) {
    if (cur.value === k) {
      if (cur.next === null) {
        prev.next = null
        break
      }
      prev.next = cur.next
      cur = cur.next
      continue
    }
    if (cur.next === null) {
      break
    }
    prev = cur
    cur = cur.next
  }
  return l;
}

module.exports = {
  removeKFromList
};
