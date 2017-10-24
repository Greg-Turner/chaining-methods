/* Using one single line of JavaScript code, complete the following tasks on the array of integers below.

 Sort the numbers in descending order (10, 9, 8, 7, etc).
 Remove any integers greater than 19.
 Multiply each remaining number by 1.5 and then subtract 1.
 Then output (either in the DOM or the console) the sum of all the resulting numbers. */

 const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

/*
 let newIntegers=integers.map(function(num){return num+100});
 let sortedIntegers=newIntegers.sort();
 let reducedIntegers=sortedIntegers.map(function(num){return num-100})
 let reversedIntegers=reducedIntegers.reverse();
 let filteredIntegers = reversedIntegers.filter(function(num){return num<19});
 let multIntegers = filteredIntegers.map(function(num){return num*1.5-1});
 let sumOfAll = multIntegers.reduce(function(num,next){return num+next});
*/

// let sumOfAll = integers
// .map(num => num+100)
// .sort()
// .map(num => num-100)
// .reverse()
// .filter(num => num<19)
// .map(num => num*1.5-1)
// .reduce((num,next) => num+next)
// console.log(sumOfAll);

console.log(integers.map(num => num+100).sort().map(num => num-100).reverse().filter(num => num<19).map(num => num*1.5-1).reduce((num,next) => num+next))