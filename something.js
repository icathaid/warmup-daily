let arr = [1,2,3,4,5,6,7,8,9,10];

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  };
};

function whileLoop(arr){
  let counter = 0;
  while(counter < arr.length){
    console.log(arr[counter]);
    counter++;
  };
};

arr.map(arr);
arr.filter(arr);
arr.reduce(arr);

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = ['Odie', ...{ people }, 'Garfield'];

//  This as far as I got within the time I was given.

const newStuff = {};
let newState = {};