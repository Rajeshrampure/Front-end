// alert(name);
// prompt("Hello please enter the name");
// confirm("Are you ");

// Variables in JS

// 1. let
// 2. var
// 3. const

// declaration of syntax
// let name;
// name = "Vinod Biradar";
// name = true;
// name = 23345;
// console.log('Name is ', name);

// var age = 34;
// age = "Testing";
// ge = false;
// age = 123.852;
// console.log('The age is', age);

// const piValue = 3.142;
// console.log(piValue);

// Data Types in JS
// 7 types of data types in JS

// let firstName = "Vinod";
// console.log(firstName, typeof firstName);
// firstName = 'Biradar';
// console.log(firstName, typeof firstName);
// firstName = 788;
// console.log(firstName, typeof firstName);
// firstName = true;
// console.log(firstName, typeof firstName);
// firstName = false;
// let data;
// console.log(data, typeof data);
// firstName = null;
// console.log(firstName, typeof firstName);
// firstName = 5689523568965235685n;
// console.log(firstName, typeof firstName);
// let s1 = Symbol();
// console.log(s1, typeof s1);
// for adding name
// let firstName=prompt("Please enter first name");
// let lastName=prompt("Please enter last name");
// let fullName = firstName+' '+lastName;
// console.log(fullName);
// adding numbers
// let firstNum=prompt("Please enter first num");
// let lastNum=prompt("Please enter last num");
// firstNum = Number(firstNum)
// lastNum=Number(lastNum)
// let fullNum = firstNum+lastNum;
// fullNum = Number(fullNum);
// console.log(fullNum);

// // Type Conversion
// let name = "Vinod Biradar";
// console.log("Before Conver",typeof name);
// name = Number(name);
// name = Boolean(name);
// name = Object(name);
// name = String(name);
// console.log("After Conver",typeof name);

// var age = 12;
// console.log(typeof age);
// console.log(typeof String(age));


// let age2 = 45;
// console.log(typeof age2);


// // Add two Numbers
// let firstNum = Number(prompt("Enter the first Number"));
// let lastNum = Number(prompt("Enter the first Number"));

// console.log(firstNum + lastNum)
// Document.write(firstNum + lastNum)
let input = Number(prompt("Enter the input"));

if (input>0 && input % 2 == 0) {
    console.log(input);
    console.log("The Input is Even", typeof input);
}
else if(input>0 && input % 2 !== 0){
    console.log(input);
    console.log("The Input is Odd", typeof input);
}
else if(input< 0){
    console.log("The Input is Negative");
}
else if (input==true){
    console.log("Input type is Boolean");
}
else if (input==false){
    console.log("Input type is Boolean");
}
else{
    console.log("Input type is String");
}

