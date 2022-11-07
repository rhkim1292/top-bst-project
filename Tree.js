import Node from './Node.js';

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.val}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

class Tree {
  constructor(treeArr) {
    const uniqueSorted = this.removeDuplicates(this.mergeSort(treeArr));
    this.root = this.buildTree(uniqueSorted, 0, uniqueSorted.length - 1);
  }

  mergeSort(arr) {
    if (arr.length < 2) return arr;
    const halfwayPoint = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, halfwayPoint);
    const secondHalf = arr.slice(halfwayPoint, arr.length);
    const sortedFirstHalf = this.mergeSort(firstHalf);
    const sortedSecondHalf = this.mergeSort(secondHalf);

    let i = 0;
    let j = 0;
    const sorted = [];
    while (i < sortedFirstHalf.length && j < sortedSecondHalf.length) {
      if (sortedFirstHalf[i] < sortedSecondHalf[j]) {
        sorted.push(sortedFirstHalf[i]);
        i++;
      } else {
        sorted.push(sortedSecondHalf[j]);
        j++;
      }
    }

    if (i < sortedFirstHalf.length) {
      while (i < sortedFirstHalf.length) {
        sorted.push(sortedFirstHalf[i]);
        i++;
      }
    } else if (j < sortedSecondHalf.length) {
      while (j < sortedSecondHalf.length) {
        sorted.push(sortedSecondHalf[j]);
        j++;
      }
    }

    return sorted;
  }

  removeDuplicates(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
      if (!unique.includes(arr[i])) unique.push(arr[i]);
    }
    return unique;
  }

  buildTree(treeArr, start, end) {
    if (start > end) {
      return null;
    }
    const mid = parseInt((start + end) / 2);
    const node = new Node(treeArr[mid]);
    node.left = this.buildTree(treeArr, start, mid - 1);
    node.right = this.buildTree(treeArr, mid + 1, end);
    return node;
  }

  insert(value) {
    const insertHelper = (root, value) => {
      if (!root) {
        root = new Node(value);
        return root;
      }

      if (value < root.val) root.left = insertHelper(root.left, value);
      else if (value > root.val) root.right = insertHelper(root.right, value);

      return root;
    };
    insertHelper(this.root, value);
  }

  delete(value) {
    const findMinVal = (root) => {
      let minVal = root.val;
      while (root.left) {
        minVal = root.left.val;
        root = root.left;
      }
      return minVal;
    };

    const deleteHelper = (root, value) => {
      if (!root) return root;

      if (value < root.val) root.left = deleteHelper(root.left, value);
      else if (value > root.val) root.right = deleteHelper(root.right, value);
      else {
        if (!root.left) return root.right;
        else if (!root.right) return root.left;
        root.val = findMinVal(root.right);
        root.right = deleteHelper(root.right, root.val);
      }

      return root;
    };

    this.root = deleteHelper(this.root, value);
  }

  find(value) {
    const findHelper = (root, value) => {
      if (!root) return root;

      if (value < root.val) return findHelper(root.left, value);
      else if (value > root.val) return findHelper(root.right, value);
      else {
        return root;
      }
    };

    return findHelper(this.root, value);
  }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);
tree.insert(2);
prettyPrint(tree.root);
tree.insert(6);
prettyPrint(tree.root);
tree.delete(67);
prettyPrint(tree.root);
console.log(tree.find(10));