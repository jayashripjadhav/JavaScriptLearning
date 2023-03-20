console.log(`Ques2:College information using class:`);
class College{
    name
    location
    cource
    univercity
    constructor(name,location,cource,univercity){
        this.name=name;
        this.location=location;
        this.cource=cource;
        this.univercity=univercity;
    }
    details(){
      console.log(this.name,this.location, this.cource,this.univercity);
    }

}
let college1=new College("Vidyamandir Highschool Sangola","Sangola","12th ","Solapur",);
//console.log(college1);
college1.details();
let college2=new College("Vidnyan Mahavidhyalaya Sangola","Sangola","BCS","Solapur",);
//console.log(college2);
college2.details();
let college3=new College("Sangola College Sangola","Sangola","MCA","Solapur",);
//console.log(college3);
college3.details();
let college4=new College("Fabtech College Sangola","Sangola","B.E","Solapur",);
//console.log(college4);
college4.details();
console.log(`-------------------------------------------------------------------`);
console.log(`Ques3:Traverse Object using for in loop`);
function traverseObject(college1){
    for (const key in college1) {
        if (Object.hasOwnProperty.call(college1, key)) {
            const element = college1[key];
            console.log(key,element);
            
        }
    }
}
traverseObject(college1);
function traverseObject(college2){
    for (const key in college2) {
        if (Object.hasOwnProperty.call(college2, key)) {
            const element = college2[key];
            console.log(key,element);
            
        }
    }
}
traverseObject(college2);
function traverseObject(college3){
    for (const key in college3) {
        if (Object.hasOwnProperty.call(college3, key)) {
            const element = college3[key];
            console.log(key,element);
            
        }
    }
}
traverseObject(college3);
function traverseObject(college4){
    for (const key in college4) {
        if (Object.hasOwnProperty.call(college4, key)) {
            const element = college4[key];
            console.log(key,element);
            
        }
    }
}
traverseObject(college4);

