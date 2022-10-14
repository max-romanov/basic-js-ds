const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootValue = null
  }

  root() {
    return this.rootValue
  }

  add( data ) {
    this.rootValue = addNode(this.rootValue, data)
    function addNode(node, data) {
      if (!node) return new Node(data)
      if (node.data == data) return node

      if (node.data > data) node.left = addNode(node.left, data)
      if (node.data < data) node.right = addNode(node.right, data)

      return node
    }
  }

  has( data ) {
    return hasData(this.rootValue, data)
    function hasData(node, data) {
      if (!node) return false
      if (node.data == data) return true

      if (node.data > data) return hasData(node.left, data)
      if (node.data < data) return hasData(node.right, data)
    }
  }

  find( data ) {
    return findData(this.rootValue, data)
    function findData(node, data) {
      if (!node) return null

      if (node.data == data) return node

      if (node.data > data) return findData(node.left, data)
      if (node.data < data) return findData(node.right, data)
    }
  }

  remove( data ) {
    this.rootValue = removeData(this.rootValue, data)
    function removeData(node, data) {
      if (!node) {
        return null
      } else if (data < node.data) {
        node.left = removeData(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeData(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        } else if (!node.left) {
          node = node.right
          return node
        } else if (!node.right) {
          node = node.left
          return node
        } else {
          let maxLeft = node.left
          while (maxLeft.right) {maxLeft = maxLeft.right}
          node.data = maxLeft.data
          node.left = removeData(node.left, maxLeft.data)
          return node
        }
      }
    }
  }

  min() {
    if (!this.rootValue) return null
    let node = this.rootValue
    while (node.left) {node = node.left}
    return node.data
  }

  max() {
    if (!this.rootValue) return null
    let node = this.rootValue
    while (node.right) {node = node.right}
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};