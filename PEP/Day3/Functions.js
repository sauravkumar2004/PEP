function calculateDiscount(price, discount = 10) {
    return price * (1 - discount / 100);
}

// // console.log(calculateDiscount(100));

// function mergeArrays(arr1,arr2){
//     console.log([...arr1,...arr2]);
// }
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// mergeArrays(arr1,arr2);


function logArguments(...args) {
    console.log(...args);
}
logArguments("hello")

function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage} ${name}`);
}

function sum(a, b, c) {
    return a + b + c;
}


let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

function createUserProfile(username, age = 25, country = "Unknown") {
    return {
        username: username,
        age: age,
        country: country
    };
}


