'use strict';

let testArray = [1,2,3,4,5,6,7,8,9,10];

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log('Array at position ', i, ': ', arr[i]);
  };
};

function whileLoop(arr){
  let i = 0;
  while(i < arr.length){
    console.log('Array at position ', i, ': ', arr[i]);
    i++;
  };
};

function mapify(arr, func){
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    newArray.push(func(arr[i]));
  };
  // return newArray;
  console.log('new array: ', newArray);
}

function filterStuff(arr, func){
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
      let check = func(arr[i]);
      if(check){
        newArray.push(check);
      };
    };
  //  return newArray;
  console.log('new array: ', newArray);
};

function reducerate(arr, func){
  for(let i = 0; i < (arr.length - 1); i++){
    console.log(func(arr[i], arr[i + 1]));
  };
};

let testFunction = (a) => {
    return a + 1;
  };

let filterFunction = (num) => {
  if(num % 2 === 0){
    return num;
  };
};

let reducerFunction = (a, b) => {
  return (a + b);
};



console.log('forLoop: ');

forLoop(testArray);

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

console.log('whileLoop: ');

whileLoop(testArray);

console.log('mapify');


mapify(testArray, testFunction);

console.log('filter out odd numbers');
console.log('original array: ', testArray);

filterStuff(testArray, filterFunction);

console.log('reducer function: ');
console.log('Original Array: ');
console.log(testArray);
reducerate(testArray, reducerFunction);
