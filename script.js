// Spread Operator

// 01. Concatenating Arrays: Write a function that takes two arrays as arguments and returns a new array that combines the elements of both arrays using the spread operator.

/*
function combine(arr1, arr2) {
  return [...arr1, ...arr2];
}

let arr1 = [1, 2, 2];
let arr2 = [4, 5, 6];
console.log(combine(arr1, arr2));
*/

// 02. Merging Objects: Create a function that takes two objects as arguments and merges them into a new object using the spread operator. If there are any overlapping keys, the values from the second object should take precedence.

function merge(obj1, obj2) {
  let mergeObj = { ...obj1, ...obj2 };
  console.log(mergeObj);
}

let obj1 = { a: 'Hello', b: 'Hi' };
let obj2 = { c: 'Bye', d: 'see you' };

merge(obj1, obj2);

// 03. Cloning Arrays: Write a function that takes an array as an argument and returns a new array that is a clone of the original array using the spread operator. Make sure that modifying the cloned array does not affect the original array.

function cloneArry(arry) {
  let newArr = [...arry];
  return newArr;
}

let oldArr = [131, 2, 2, 2];
let cloneArray = cloneArry(oldArr);
cloneArray.push(45);
console.log(cloneArray);

console.log(oldArr);

// 04. Removing Elements from an Array: Implement a function that takes an array and an index as arguments, and returns a new array with the element at the specified index removed using the spread operator.

function removeElementFromArray(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const indexToRemove = 2;
const newArray = removeElementFromArray(originalArray, indexToRemove);

console.log(originalArray);
// Output: [1, 2, 3, 4, 5]
console.log(newArray);
// Output: [1, 2, 4, 5]

// 05. Combining Multiple Strings: Write a function that takes multiple strings as arguments and returns a single string that combines all the input strings using the spread operator.

function combineStrings(...strings) {
  return strings.join('');
}

// Example usage:
const combinedString = combineStrings('Hello', ' ', 'World', '!');
console.log(combinedString);
// Output: "Hello World!"

//06. Merging Arrays of Objects: Create a function that takes multiple arrays of objects as arguments and merges them into a single array using the spread operator. Each input array should retain its original order in the merged array.

function mergeArrays(...arrays) {
  return [].concat(...arrays);
}

// Example usage:
const array1 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
];
const array2 = [
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Sarah' },
];
const array3 = [
  { id: 5, name: 'Mike' },
  { id: 6, name: 'Emily' },
];
const mergedArray = mergeArrays(array1, array2, array3);

console.log(mergedArray);
// Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }, { id: 4, name: 'Sarah' }, { id: 5, name: 'Mike' }, { id: 6, name: 'Emily' }]

const greetPeople = (greeting, ...names) => {
  names.forEach((name) => {
    console.log(`${greeting} ${name}`);
  });
};

greetPeople('Hello', 'Alice', 'Bob', 'Charlie');
