let a = prompt('nhap a');
let b = prompt('nhap b');
console.log(Number.isNaN(a));
a = Number.parseInt(a);
b = Number.parseInt(b);
let sum = a + b;

console.log(sum);
console.log(Number.isInteger(sum));