function calculateWorkingDays(deadlineDate) {
    let currentDate = new Date();
    let workingDays = 0;
    
    while (currentDate < deadlineDate) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            workingDays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return workingDays;
}

let deadlineDate = new Date("2024-03-31");  
let workingDays = calculateWorkingDays(deadlineDate); 
console.log(workingDays);