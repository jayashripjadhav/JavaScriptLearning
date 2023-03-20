
console.log(`-------if else statement example-------`);
votingEligibility = function (age){
    if (age<=0 || age>120) {
        console.log(`Invalid data: ${age}`);
    } 
    else {
        console.log(`Valid data`);
        if (age>=18) {
            console.log(`Congratulation you can vote: ${age}`);
    }
    else{
        console.log(`Sorry you are not eligible for vote: ${age}`);
    }
}
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);
