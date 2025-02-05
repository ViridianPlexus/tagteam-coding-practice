/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

let arrowMirrorArray = (arr)=> {

  newArr = [];
  intArr = arr.toReversed()

  newArr = arr.concat(intArr);

  return newArr


}


const arrowMirrorArray = (array) => [...array, ...array.reverse()];

console.log(arrowMirrorArray([1,2,3]));
console.log(arrowMirrorArray(['a', 'b', 'c', 'd']));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
