/**
 A function is reuseable block of code that perform specific task or calculate value.Function is a fundamental building blocks javascript play a crucial role in organizing modularizing code.
*/

// Function declaration
function funcDeclaration(parameter) {
  return ` you can write valid javascript code here, ${parameter}`;
}
funcDeclaration("Argument");

// Function Expression
const funcExpression = function (parameter) {
  return ` you can write valid javascript code here, ${parameter}`;
};
funcExpression("Argument");

// Arrow Function ES6
const arrowFunction = (parameter) => {
  return ` you can write valid javascript code here, but you have to return ${parameter}`;
};
arrowFunction("Argument");

// Arrow Function ES6
const arrowFunc = (parameter) => {
  ` No, in a one-line arrow function in JavaScript, you don't need to explicitly use the "return" keyword if you wanna return a single expression. ${parameter}`;
};

// Method definition (within an object)
const funcObj = {
  method(parameter) {
    return ` you can write valid javascript code here, ${parameter}`;
  },
};

// Constructor function
function ConstructorFunc(name, age) {
  this.name = name;
  this.age = age;

  this.func = () => {
    return ` Hello ${this.name} , I'm ${this.age}.`;
  };
}

const constFunc = new ConstructorFunc("Minhaj", 20);
console.log(constFunc.func());
