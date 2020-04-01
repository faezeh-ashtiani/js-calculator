const prompt = require('prompt');

let userInput = {
  num1: "",
  num2: "",
  operation: "",
};

const updateInput = function(promptInput) {
  userInput.num1 = !promptInput.num1 ? userInput.num1 : Number(promptInput.num1);
  userInput.num2 = !promptInput.num2 ? userInput.num2 : Number(promptInput.num2);
  userInput.operation = !promptInput.operation ? userInput.operation : promptInput.operation;
}

const calculateUserInput = function(error, promptInput) {
  updateInput(promptInput);

  if (isNaN(userInput.num1) || userInput.num1 === "") {
    console.log("First number is invalid!");
    prompt.get(['num1'], calculateUserInput);
    return;
  };

  if (isNaN(userInput.num2) || userInput.num2 === "") {
    console.log("Second number is invalid!");
    prompt.get(['num2'], calculateUserInput);
    return;
  };

  const operators = ["add", "+", "subtract", "-", "multiply", "*", "divide", "/"];
  if (!operators.includes(userInput.operation)) {
    console.log("The operation you put in is invalid!");
    prompt.get(['operation'], calculateUserInput);
    return;
  };

  switch(userInput.operation) {
    case "add":
    case "+":
      console.log("We're adding numbers");
      console.log(`${userInput.num1} + ${userInput.num2} : ${userInput.num1 + userInput.num2}`);
      break;
    case "subtract":
    case "-":
      console.log("We're subtracting numbers");
      console.log(`${userInput.num1} - ${userInput.num2} : ${userInput.num1 - userInput.num2}`);
      break;
    case "multiply":
    case "*":
      console.log("We're multiplying numbers");
      console.log(`${userInput.num1} * ${userInput.num2} : ${userInput.num1 * userInput.num2}`);
      break;
    case "divide":
    case "/":
      if (userInput.num2 === 0) {
        console.log("The second number can't be zero when dividing!");
        prompt.get(['num2'], calculateUserInput);
        return
      };
      console.log("We're dividing numbers");
      console.log(`${userInput.num1} / ${userInput.num2} : ${userInput.num1 / userInput.num2}`);
      break;
  };

}  

//start the prompt
prompt.start();

console.log("I am glad you chose my calculator, because it's awesome!");
console.log("Please give me two numbers and an operator you would like to use from the list below?");
console.log("1. add(+)");
console.log("2. subtract(-)");
console.log("3. multiply(*)");
console.log("4. divide (/)");

prompt.get(['num1','num2','operation'], calculateUserInput);


