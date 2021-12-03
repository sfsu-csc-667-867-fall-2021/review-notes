const array = [];
array.push(3);


console.log(array);

array.pop();
console.log(array);

array.unshift(2); // adds at beginning
console.log(array);

array.shift(); // remove at beginning
console.log(array);


const newArray = array.slice(); // makes a copy
// usually used for states with arrays

// redux 
