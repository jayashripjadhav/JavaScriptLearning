// program to find the factorial of a number
console.log(`program to find the factorial of a number`);
function factorial(num) {
    if (num < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }
    
    // if number is 0
    else if (num === 0) {
        console.log(`The factorial of ${number} is 1.`);
    }
    
    // if number is positive
    else {
        let fact = 1;
        for (i = 1; i <= num; i++) {
            fact=fact*i;
        }
        console.log(`The factorial of ${num} is : ${fact}`);
    }
    
}
factorial(5);
factorial(7);
factorial(8);
factorial(12);

