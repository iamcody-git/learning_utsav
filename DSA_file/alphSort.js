// const number = ["one", "two", "four", "seven"];

// console.log(number.sort());

const nums = [1,20,10,6,8,9];

// in js the sort fxn first convert the items in string and then compare so we have to tell the fxn what do to and compare the
const n =(a,b)=> b-a;

console.log(nums.sort(n));
