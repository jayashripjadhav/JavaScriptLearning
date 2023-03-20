console.log("--------Voting Eligiblity Using If Statement ---------");
var voting = function(age){
  if(age<=0 || age>120 ){
      console.log(`Age value : ${age}, Invalid data`);
  }
  if(age>=18 && age<=120) {
      console.log(`your age is : ${age}, You can vote`);
  }
  if(age<18 && age>0){
      console.log(`your age is : ${age}, You can note vote`);
  }
}
voting(45);
voting(17);
voting(8);
voting(20);
voting(-10);
voting(200);
voting(0);
