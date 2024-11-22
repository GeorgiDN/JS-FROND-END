const numbers = [1, 2, 3, 4];
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 24



const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5]



const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'banana' },
    { type: 'vegetable', name: 'carrot' }
];
const grouped = items.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item.name);
    return acc;
}, {});
console.log(grouped);
// { fruit: ['apple', 'banana'], vegetable: ['carrot'] }
