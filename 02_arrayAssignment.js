const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
let totalElements = arrayNumbers.length;
console.log(`Total Elements in arrayNumbers --> ${totalElements}`);
console.log(`---------------------------------------------------------`);
//console.log("========Display First and Last element=======");
//first element
const first = arrayNumbers[0];
console.log(`first element is : ${first}`);
//last element
const last=arrayNumbers[arrayNumbers.length-1];
console.log(`Last element is : ${last}`);
console.log(`---------------------------------------------------------`);
//console.log("========Display the third last number using length property=======");
const lastThird=arrayNumbers[arrayNumbers.length-3];
console.log(`Third last element is : ${lastThird}`);
console.log(`---------------------------------------------------------`);
//console.log("========Display even number in the array=======");
const even = [];
for (const number of arrayNumbers) {
  if (number % 2 === 0) {
    even.push(number);
  }
}
console.log(`Even number in array is : ${even}`);
console.log(`---------------------------------------------------------`);
//console.log("========Display even number in the array=======");
const odd = [];
for (const number of arrayNumbers) {
  if (number % 2 != 0) {
    odd.push(number);
  }
}
console.log(`odd number in array is : ${odd}`);
console.log(`---------------------------------------------------------`);
//console.log("========Display even position in the array=======");
let evenPosition=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 ==0) {
        evenPosition=evenPosition.concat(arrayNumbers[index]);
        
    }
    
}
console.log(`even position element in array is: ${evenPosition}`);
console.log(`---------------------------------------------------------`);
//console.log("========Display odd position in the array=======");
let oddPosition=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 !=0) {
        oddPosition=oddPosition.concat(arrayNumbers[index]);
        
    }
    
}

console.log(`odd position element in array is: ${oddPosition}`);
console.log(`---------------------------------------------------------`);
//console.log("========Sum of all elements in the array=======");
var sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum=sum+arrayNumbers[index];
    
}
console.log(`sum of all elements in array is : ${sum}`);
console.log(`---------------------------------------------------------`);
//console.log("========find the number which are multiple by 5======="); 
   let multiple=[];
      for(let i=0; i<arrayNumbers.length; i++) {        
      if(arrayNumbers[i]%5==0){            
        multiple=multiple.concat(arrayNumbers[i]);
      }    
    }    
    console.log(` The number which are multiple by 5 :${multiple}`);
    console.log(`---------------------------------------------------------`);
//console.log("========115 is available in arrayNumber======="); 
  console.log("115 is available in array :",arrayNumbers.includes(115));
  //console.log(arrayNumbers.includes(115));

console.log(`---------------------------------------------------------`);
//console.log("========23 is available in arrayNumber======="); 
console.log("23 is available in array :",arrayNumbers.includes(23));
//console.log(arrayNumbers.includes(23));
console.log("-------------------------------------------------------------------");
console.log(`Before adding 55,66 element array is : "${arrayNumbers}"`);
arrayNumbers.splice(3, 0, 55,66);
console.log(`After adding 55,66 element array is :"${arrayNumbers}"`);

console.log("-------------------------------------------------------------------");
console.log(`before deleting element starting from index 4:"${arrayNumbers}"`);
let spliceRes = arrayNumbers.splice(4, 3);
console.log(`After deleting element starting from index 4: ${arrayNumbers}`);
console.log(`Total deleted elements:  ${spliceRes}`);







