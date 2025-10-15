/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()
    where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result); //correct result is 3. JS does implicit conversion.

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");           // ??? use ! to change false into a falsy value? no idea how to strip false of string typiness. no idea how to make it false here. moving on......
}

console.log(typeof(isValid));

let age = "25";
let totalAge = Number(age) + 5;           // Number() function converts string to number for adding properly
console.log("Total Age: " + totalAge);
