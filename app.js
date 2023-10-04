//function is input output machine
//we declare, define and run functions
//functions can accept multiple arguments using ,
/* function test(message) {
  console.log(message);
}
//String "" sentences, word etc.
test("Ugh Jane");
//Numbers/integers
test(45);
//Booleans true or false
test(true); */
//declare variables, define variables
// const num1 = Number(prompt("enter a number"));
// const num2 = Number(prompt("enter a number"));
//global scoped variables

function add(x, y) {
  console.log(x + y);
}
function test() {
  //local scope or function scope
  const x = 15;
  const y = 20;
  add(x, y);
}
console.log(x, y);
