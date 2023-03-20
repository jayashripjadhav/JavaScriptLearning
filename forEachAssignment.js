const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
// Value and index
console.log(`1]Log the array element with it's index using foreach() with arrow function`);
array_numbers.forEach( (currentValue, index, array )=>{
    console.log("Value is:",currentValue,  "index is: ", index);
} );
console.log(`2]a)Find the positive number and Log the console using foreach() with arrow function`);
array_numbers.forEach( (currentValue) => {
    if(currentValue>=0) {
        //arrayOfEven.push(currentValue);
        //console.log("Array of positive numbers are:");
      console.log(currentValue);
    }
});
console.log(`3]Find the negative number  and Log the console in new array using foreach() with arrow function`);
const arrayOfNega = [];
//console.log(array_numbers);
array_numbers.forEach( (currentValue) => {
    if(currentValue<=0) {
        arrayOfNega.push(currentValue);
      //console.log(currentValue);
    }
});
console.log("Array of negative numbers are:");
console.log(arrayOfNega);
console.log(`3]Find the even number and Log the console using foreach() with arrow function`);
array_numbers.forEach( (currentValue) => {
    if(currentValue%2==0) {
      console.log(currentValue);
    }
});
console.log(`4]Find the sum of all number in the array and Log the console using foreach() with arrow function`);
let sum = 0; 
array_numbers.forEach(currentValue => {
  sum += currentValue;
  return sum;
});
console.log(`The sum of all number in the array is:${sum}`); 
//return sum;
console.log(`---------------------------------------------------`);
console.log(`5]Find the even positioned value in the array and Log the console using foreach() with arrow function`);
array_numbers.forEach( (currentValue,index) => {
  if(index%2==0) {
    console.log(`Even positioned index is ${index} and value is ${currentValue}`);
  }
});