console.log(`Create an empty object`);
var professor = {}
console.log(professor);
console.log(`Add properties`);
professor.name= "Jayesh";
professor.age= "28";
professor.address= "pune";
professor.dateOfBirth= "5 Jan 1993";
console.log(professor);
var professor={
degrees:{
    Engineering:'CSC',
    PHD:'advance computing',
    totalOfDegree:function(){
        return this.Engineering+(",")+this.PHD+(",");
    }
   }
   }
console.log(`concat degrees`);
let concat=professor.degrees.totalOfDegree();
console.log(concat);
console.log(`Accessing an Nested object property:`);
console.log(professor.degrees);
var professor={
Certificate:{
    certificate1:'Hacker Rank Participation',
    certificate2:'Certificate in IFE Course',
    certificate3:'Certificate in advance programming',
}
}
console.log(`Accessing an Nested object property:`);
console.log(professor.Certificate);
//console.log(`concat degrees`);

console.log(`Adding new property`);
professor.height= "5.5";
console.log(professor);
console.log(`Updating an Nested object property`);
professor.name = "Raj";
console.log(professor);
console.log(`Deleting any one certificate from Nested object `);
console.log("before deleting any one certificates is:",professor.Certificate);
delete professor.Certificate.certificate1;
console.log("After deleting any one certificates is:",professor.Certificate);

console.log(`Adding an Nested object property`);
professor.Certificate.certificate4 = "International level certificate";
console.log(professor.Certificate);
console.log(`log the nested object certificate on console`);
console.log(professor.Certificate);