



// let ammount=0;
// function CreateAccount(names,age){
//     const accountno=123456;
//     const accountname=names;
//     const accountage=age;
//     console.log(accountname);
//     console.log(age);
// }
// function deposite(names,val){
//     // console.log(accountname);
//     ammount=ammount+val;
// }
// function withdrawal(names,val){
//     // console.log(accountname);
//     ammount+=val;
// }
// CreateAccount("Saurav",89);
// deposite("saurav",10);
// console.log(ammount);

let ammount = 0; // Use `let` instead of `const` to allow modifications

function CreateAccount(names, age) {
    const accountno = 123456;
    const accountname = names;
    const accountage = age;

    console.log("Account Name:", accountname);
    console.log("Account Age:", accountage);
}

function deposite(val) {
    ammount += val; // Increment the amount
    console.log("Deposited:", val);
}

function withdrawal(val) {
    if (ammount >= val) {
        ammount -= val; // Decrement the amount if sufficient balance
        console.log("Withdrawn:", val);
    } else {
        console.log("Insufficient balance for withdrawal");
    }
}

CreateAccount("Saurav", 89);
deposite(10); // Deposit 10
console.log("Current Balance:", ammount);
withdrawal(5); // Withdraw 5
console.log("Current Balance:", ammount);
withdrawal(10); // Attempt to withdraw 10
