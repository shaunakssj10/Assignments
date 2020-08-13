var sum = require('./operations/sum')
var subs = require('./operations/diff')
var mult = require('./operations/mul')
var div = require('./operations/div')

var num1 = 10;
var num2 = 2;
console.log("The sum is: " + sum(num1, num2));

console.log("The substraction is: " + subs(num1, num2));

console.log("The multiplication is: " + mult(num1, num2));

console.log("The division is: " + div(num1, num2));