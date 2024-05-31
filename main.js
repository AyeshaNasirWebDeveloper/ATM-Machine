import inquirer from "inquirer";
// Initialize user balance and pin code
let myBalance = 10000;
let myPinCode = 1234;
//Print Welcome Message
console.log("Welcome to Ayesha Nasir's ATM Machine Program");
// Take User Prompt 
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin Code",
    }
]);
// Nested Condional Statement
if (pinAnswer.pin === myPinCode) {
    console.log("Congratulations! Your Pin Code is Correct, \nLogin Successfully!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select an Operator",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw Amount") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw",
            }
        ]);
        if (withdrawAmount.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= withdrawAmount.amount;
            console.log(`${withdrawAmount.amount} Withdraw Successful`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Your Pin Code is incorrect, Try Again");
}
