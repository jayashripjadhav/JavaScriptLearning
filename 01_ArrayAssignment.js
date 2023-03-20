const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
console.log("========Display First and Last element=======");
//first element
const first = fruits_seasonal[0];
console.log(`first element is : "${first}"`);
//last element
const last=fruits_seasonal[fruits_seasonal.length-1];
console.log(`Last element is : "${last}"`);
console.log("-------------------------------------------------------------------");
//adding element in the first
console.log(`=======Add element papaya before element banana=========`);
console.log(`Before adding papaya array is :"${fruits_seasonal}"`);
fruits_seasonal.unshift("Papaya");
console.log(`After adding papaya array is :"${fruits_seasonal}"`);
console.log("-------------------------------------------------------------------");
console.log(`=======Remove Mango from array=========`);
//delete Mango element
console.log(`Before removing mango element array is : "${fruits_seasonal}"`);
let spliceResult = fruits_seasonal.splice(4,1);
console.log(`After removing mango element array is :"${fruits_seasonal}"`);
console.log("-------------------------------------------------------------------");
//adding element in the last
console.log(`======== Add element Pineapple at last position=======`);
console.log(`Before adding pineapple element array is :"${fruits_seasonal}"`);
fruits_seasonal.push("Pineapple");
console.log(`After adding pineapple element array is :"${fruits_seasonal}"`);
console.log("-------------------------------------------------------------------");
console.log("====== Inserting an element Dragon fruit before water melon=======");
console.log(`Before adding Dragon fruit element array is : "${fruits_seasonal}"`);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(`After adding Dragon fruit element array is :"${fruits_seasonal}"`);
console.log("-------------------------------------------------------------------");
console.log("====== Replacing element Orange with kivi =======");
console.log(`Before replacing element Orange with kivi array is :"${fruits_seasonal}"`);
fruits_seasonal.splice(2, 1, "Kivi");
console.log(`After replacing element orange with kivi array is :"${fruits_seasonal}"`);
console.log("-------------------------------------------------------------------");
console.log("====== Log the element starting from index 1 to 4 =======");
console.log(`"${fruits_seasonal}"`);
let sliceRes = fruits_seasonal.slice(1, 4);
console.log(`"${sliceRes}"`);
console.log("-------------------------------------------------------------------");
console.log("====== Select last 3 elements and log on console using length property =======");
console.log(`"${fruits_seasonal}"`);
let last_3_Element = fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(`"${last_3_Element}"`);








