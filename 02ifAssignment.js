console.log("--------If Statement---------");
function gradCalculation(marks) {
    if (marks==0 || marks<0 || marks>100) {
        console.log(`Please provide the valid marks ${marks}`);
    }
    if (marks>=90) {
        console.log(`Funtastic marks:${marks}...Your grade is "A+"`);
        
    }
    
    if (marks>=75 && marks<90) {
        console.log(`Excellent marks:${marks}...Your grade is "A"`);
    }
    if (marks>=50 && marks<75) {
        console.log(`Good Marks:${marks}...Your grade is "B"`);   
    }
    if (marks>=35 && marks<50) {
        console.log(` Marks:${marks}...Your grade is "C"..Need improvement`);   
    }
   
}
gradCalculation(98);
gradCalculation(80);
gradCalculation(90);
gradCalculation(0);
gradCalculation(150);
gradCalculation(-7);
gradCalculation(35);
gradCalculation(29);
gradCalculation(64);
gradCalculation(49);