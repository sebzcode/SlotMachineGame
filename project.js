//1 Deposit money
//2 Determine the number of lines to bet on

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter the deposit amount : ");
        const numberDepositAmount = parseFloat(depositAmount);
        if(isNaN(numberDepositAmount) || (numberDepositAmount <= 0)){
            console.log("Invalid Deposit, Try Again.");
        }
        else{
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the numbe of lines to bet on (1-3) : ");
        const numberOfLines = parseFloat(lines);
        if(isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines >3){
            console.log("Invalid number of lines, Try Again");
        }
        else{
            return numberOfLines;
        }
    }
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();