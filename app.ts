#! /usr/bin/env node
import inquirer from "inquirer"         

let myBalance = 0;
let isContinue = true;
const pinCode = 1234;

const message = ' "Welcome to ATM" \n';
console.log(message);

let pin_ans = await inquirer.prompt({

    type: "number",
    name: "ans",
    message: "Please Enter Pin Code: "

})

if(pin_ans.ans === 1234){

do {
    let ans = await inquirer.prompt({
       type: 'list',
       name: 'list',
       message: 'Select any option:',
       choices: ['Deposite','Withdraw', 'fast_cash', 'Balance Check'],        
    })

// --------------------------------Deposite----------------------------------
if(ans.list === "Deposite"){
   let ans = await inquirer.prompt({
       type: 'number',
       name: 'Deposite_amount',
       message: 'Please enter your amount: ',
   })

   if(ans.Deposite_amount > 0){
       myBalance = myBalance + ans.Deposite_amount
       console.log(`\n  Now your amount is: ${myBalance}`);
   }
}

// --------------------------------Withdraw----------------------------------
else if(ans.list === "Withdraw"){
   let ans = await inquirer.prompt({
       type: 'number',
       name: 'Withdraw_amount',
       message: 'Please enter amount: ',
   })

   if(ans.Withdraw_amount <= myBalance){
       console.log(`  The Withdraw amount is: ${myBalance}`);
   }
   else {
       console.log("  Not enough Money");
   }
}

// --------------------------------Fast Cash----------------------------------
else if(ans.list === "fast_cash"){
   let ans = await inquirer.prompt({
       type: 'list',
       name: 'fast_cash',
       message: '\n\nPlease select one: ',
       choices:['500', '1000', '2000'],
   })

   if(ans.fast_cash <= myBalance){
       if(ans.fast_cash === '500'){
          myBalance -= ans.fast_cash
          console.log(`  The Fast Cash amount is: ${myBalance}`);
       }

   else if(ans.fast_cash <= myBalance){
       if(ans.fast_cash === '1000'){
           myBalance -= ans.fast_cash,
           console.log(`  The Fast Cash amount is: ${myBalance}`);
       }

   else if(ans.fast_cash <= myBalance){
       if(ans.fast_cash === '2000'){
           myBalance -= ans.fast_cash,
           console.log(`  The Fast Cash amount is: ${myBalance}`);
       }
   }

}
   }}
// --------------------------------Balance Check----------------------------------
else if(ans.list === "Balance Check"){

   console.log(`  Your Balanace is: ${myBalance}`);
   }

// --------------------------------While Condition----------------------------------
let answer = await inquirer.prompt({
  
   type: 'confirm',
   name: 'condition',
   message:'Do you want to continue: ',
})
 if(answer.condition === 'false'){
   isContinue = false
 }
}
while(isContinue);
}
else{
    console.log("  Invalid Pin Code");

}
