console.log("Array Using Shallow Cloning");
const arrayNums=[20,3,4,56,90,400,49];
const myArray = arrayNums;//shallow cloning
console.log("Original array is",arrayNums);
console.log("Shallow Cloned array is:",myArray);
console.log(`Update cloned array with values 55,66`);
myArray.push(55,66);
console.log("After updating cloned array is:",myArray);
console.log("original array is:",arrayNums);
console.log("Array Using Deep Cloning");
const arrayClone =  [... arrayNums]; // Deep Clone
console.log("Original array is",arrayNums);
console.log("Deep Cloned array is:",myArray);
console.log(`Update original array with values 10,25`);
arrayNums.push(10,25);
console.log("After updating original array is:",arrayNums);
console.log("Deep cloned array is:",arrayClone);
console.log(`Array Merge or concat using spread operater original array and second array`);
const arrayEven=[2,30,14,8];
console.log(`Second array is:`);
console.log(arrayEven);
let mergeArray=[...arrayNums,...arrayEven];
console.log(mergeArray);
console.log(`Create employee_info Object`);
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,000INR",
        aug_month:"50,000INR",
        jun_month:"65,000INR"

    },
    address:{
        locality:{
            colony:"Om Vrindavan Socity",
            street:"Kanch Pakli ,431202",

        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88" ,"1800-4567 32" , "+91-9096 5678 77"]
}
console.log(employee_info);
console.log(`a)log Address:Locality,city,state and country`);
console.log(`Address:locality is:"${employee_info.address.locality.colony}","${employee_info.address.locality.street}",city is:"${employee_info.address.city}",state is:"${employee_info.address.state}",country is:"${employee_info.address.country}"`);
console.log(`b)Mobile Numbers`);
console.log(`Mobile Numbers are:"${employee_info.mobiles}"`);
console.log(`Performing deep cloning using JSON.Stringfy`);
let empBill = JSON.parse(JSON.stringify(employee_info));
console.log("Copied Object is:",empBill);
console.log("Before updating july salary is:",empBill.salary);
empBill.salary.july_month = "80000INR";
console.log("After updating july salary is:",empBill.salary);
employee_info.address.country="United Kingdom";
console.log("After updating country is:",employee_info.address.country);
console.log("log update values for original and cloned object on console");
console.log(`update values in original is country:${employee_info.address.country}`);
console.log(`update values in cloned object is july salary:${empBill.salary.july_month}`);
