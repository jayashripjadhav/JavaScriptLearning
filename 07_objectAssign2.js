const car = {
    carName:"Creta SX",
    company:"Hundai",
    launchYear:"2017"
}
const carEngine={
    enginePower:"1499CC",
    maxPower:"113 BHP"
}
//console.log(car);
//console.log( carEngine);
console.log(`1)Concat two object using Object.assign() method`);
const concat=Object.assign(car,carEngine);
console.log("concat two object car and carengine using object.assign()method:",concat);
console.log(`2)Concat two object using spread operator method`);
let mergeObject={...car,...carEngine};
console.log(mergeObject);
