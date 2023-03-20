console.log("------Marriage Eligiblity Check-----");
console.log("------Boys Marriage Eligiblity Check-----");
function maleMarriageEligiblity(gender,age,boyName) {
   
 eligiblity=gender=="Male"&&age>=21 ?`Hey ${boyName} You are eligible for marriage`:`${boyName} You are not eligible for marriage`;
 console.log(`${eligiblity}`);
}
maleMarriageEligiblity("Male", 25,"Billgates");
maleMarriageEligiblity("Male", 17,"Stew Jobs");


console.log("------Girls Marriage Eligiblity Check-----");
function feMaleMarriageEligiblity(gender,age,girlName) {
   
 girlEligiblity=gender=="Female"&&age>=18 ?`Hey ${girlName} You are eligible for marriage`:`${girlName} You are not eligible for marriage`;
 console.log(`${girlEligiblity}`);
}
feMaleMarriageEligiblity("Female", 16,"Jenifer");
feMaleMarriageEligiblity("Female", 27,"Malinda Gates");


