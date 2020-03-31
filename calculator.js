// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }

console.log("I am glad you chose my calculator, because it's awesome!");
console.log("Which operator would you like to use?");
console.log("1. add(+)");
console.log("2. subtract(-)");
console.log("3. multiply(*)");
console.log("4. divide (/)");
console.log('\(my program can read your mind and knows what you want to do!');
console.log('I also know the numbers you have in mind!\)');

const operators = ["add", "+", "subtract", "-",
"multiply", "*", "devide", "/"];

// this is where we are reading users mind - feel free to change the values.
const userInput = {
  num1: 4,
  num2: 1,
  operation: '/',
}

if (isNaN(userInput.num1) || isNaN(userInput.num2) || userInput.num2 === 0) {
  console.log("The numbers you have in mind are invalid");
  // break;
}

if (!operators.includes(userInput.operation)) {
  console.log("The operation you have in mind are invalid");
  // break;
}

const calculate = function(input) {
  switch(input.operation) {
    case "add":
    case "+":
      console.log("We're adding numbers");
      console.log(`${input.num1} + ${input.num2} : ${input.num1 + input.num2}`);
      break;
    case "subtract":
    case "-":
      console.log("We're subtracting numbers");
      console.log(`${input.num1} - ${input.num2} : ${input.num1 - input.num2}`);
      break;
    case "multiply":
    case "*":
      console.log("We're multiplying numbers");
      console.log(`${input.num1} * ${input.num2} : ${input.num1 * input.num2}`);
      break;
    case "divide":
    case "/":
      console.log("We're dividing numbers");
      console.log(`${input.num1} / ${input.num2} : ${input.num1 / input.num2}`);
      break;
  }
}

calculate(userInput)


