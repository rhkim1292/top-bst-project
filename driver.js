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