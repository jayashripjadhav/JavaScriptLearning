// Set: Allow unique elements
const setNumbers = new Set(); // Creating Set
console.log("Adding elements in set");
setNumbers.add(0); // Add element
setNumbers.add(1);
setNumbers.add(3);
setNumbers.add(4);
setNumbers.add(1); // Adding duplicate element - 1
setNumbers.add(3);// Adding duplicate element - 3
console.log(setNumbers);


console.log(`Total available elements in Set`);
const totalElements =  setNumbers.size;
console.log(`Total elements in set : ${totalElements}`);

console.log(`After deletion`);
const isDeleted3 =  setNumbers.delete(3);
const isDeleted99 = setNumbers.delete(99);
console.log(setNumbers);
console.log(`Is 3 Deleted ? ${isDeleted3}, Is 99 Deleted: ${isDeleted99}`);
console.log(`Clearing set using clear() `);
setNumbers.clear();
console.log(setNumbers);
setNumbers.add(5);
setNumbers.add(6);
console.log(`Type of set is : ${typeof setNumbers}`);

for (const element of setNumbers) {
    console.log(element);
}
