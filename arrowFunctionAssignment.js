console.log(`1]Arrow function with no argument and no return value `);
let display = ()=>{
    console.log("Good Morning,Today is Monday");
}
display();
// Arrow Function with argument and return value
console.log(`----------------------------------------------------------------`);
console.log(`2]Arrow Function with 3 argument and no return value`);
let multiply = (n1, n2, n3)=> {
    let mul = n1*n2*n3;
    return(mul);

}
let mulResult = multiply(5, 5, 2);
console.log(`a)Multiplication of 3 argument 5,5,2 is:${mulResult}`);
let mulResult1 = multiply(10, 4, 1);
console.log(`b)Multiplication of 3 argument 10,4,1 is:${mulResult1}`);
console.log(`----------------------------------------------------------------`);
// Arrow Function with argument 
console.log(`Arrow Function with 5 argument and return value should be addition `);
let sum = (num1,num2,num3,num4,num5)=>{
    let add=num1+num2+num3+num4+num5;
    return add;
    
}
let add1=sum(100, 100, 200, 349, 756);
console.log(`a)Addition of 100,100,200,349,756 is:${add1} `);
let add2=sum("I am ", " learning ", " ES6 ", " features ", " In depth");
console.log(`b)Addition of "I am "," learning " ," ES6 " ," features "," In depth" is:${add2}`);


