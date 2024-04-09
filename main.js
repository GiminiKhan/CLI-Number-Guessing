#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) use input for guessing number
// 3) compare user input with computer generated number and show result
console.log("\n\tWelcome to \'Gimini Khan\' - CLI Simple Number Guessing Game\n ");
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
console.log(answers);
if (answers.userGussedNumber === randomNumber) {
    console.log("Congratulation! you guessed a right number.");
}
else {
    console.log("You guessed a wrong number");
}
