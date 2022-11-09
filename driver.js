import Tree from './Tree.js';

function generateRandomArray() {
    const start = 1;
    const end = Math.floor(Math.random() * 30) + 1;

    const retArr = [];

    for (let i = start; i <= end; i++) {
        retArr.push(Math.floor(Math.random() * 1001));
    }

    return retArr;
}

const bst = new Tree(generateRandomArray());
console.log('BST Created.');
console.log('Is the BST balanced?: ' + bst.isBalanced());
console.log('Level order list of nodes: ' + bst.levelOrder());
console.log('Pre order list of nodes: ' + bst.preorder());
console.log('Post order list of nodes: ' + bst.postorder());
console.log('In order list of nodes: ' + bst.inorder());
console.log('Inserting 2000 into BST.');
bst.insert(2000);
console.log('Inserting 2050 into BST.');
bst.insert(2050);
console.log('Inserting 2030 into BST.');
bst.insert(2030);
console.log('Inserting 2070 into BST.');
bst.insert(2070);
console.log('Inserting 2080 into BST.');
bst.insert(2080);
console.log('Is the BST still balanced?: ' + bst.isBalanced());
console.log('Rebalancing BST.');
bst.rebalance();
console.log('Is the BST balanced after rebalancing?: ' + bst.isBalanced());
console.log('Level order list of nodes: ' + bst.levelOrder());
console.log('Pre order list of nodes: ' + bst.preorder());
console.log('Post order list of nodes: ' + bst.postorder());
console.log('In order list of nodes: ' + bst.inorder());