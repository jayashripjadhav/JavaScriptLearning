let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);


console.log(`Traversing array using for loop in Reverse order`);
// initialization   condition  update 
let lastIndex = arrayOfNumbers.length-1;
for (let index = lastIndex; index > 0; index--) {
    const element = arrayOfNumbers[index];
     console.log(element); 
}


// Array of salaries
console.log(`Accessing salary of each employee`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;// 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];// 10000 20000 30000
    sumOfSal = sumOfSal+element;
    console.log(element);
}
console.log(`Total Salary of all employee is : ${sumOfSal}`);


//adding element in the last
console.log(`======== push() methods=========`);
let arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.push(3);
arrayOfNum.push(7,11,12,33);
console.log(arrayOfNum);
//adding element in the first
console.log(`======== unshift() methods=========`);
var arrayOfNum1 = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum1);
arrayOfNum1.unshift(77);
arrayOfNum1.unshift(99, 111, 333);
console.log(arrayOfNum1);

//delete element at last
console.log(`======== pop() methods=========`);
var arrayOfNumPop = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNumPop.pop();
console.log(popResult);
console.log(arrayOfNumPop);
//delete element first
console.log(`======== shift() methods=========`);
var arrayOfNumPop = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNumPop.shift();
console.log(shiftResult);
console.log(arrayOfNumPop);

//select perticular index
console.log(`======== slice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3);
let sliceRes = arrayOfNum.slice(2, 5);
console.log(arrayOfNum);
console.log(sliceResult);
console.log(sliceRes);




