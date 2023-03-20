console.log("1..");
 function myName()
{
    console.log("My name : Jayashri");
}
function myCollegeName()
{
    console.log("My college name : Vidnyan Mahavidhyalaya Sangola");

}
myName();
myCollegeName();
console.log("2..");
function personalDetails(firstName,lastName,collegeName,)
{
    console.log("First name : Jayashri");
    console.log("Last name : Jadhav");
    console.log("College name : Vidnyan Mahavidhyalaya Sangola");
}
personalDetails();
console.log("3..");
function swapValuesDude(value1,value2)
{
    console.log("Before swap",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swap",value1,value2);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);
console.log("3..");
function addThreeValues(num1,num2,num3)
{
    var add=(num1+num2+num3);
    console.log("Addition of three values:",add);
}

addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
