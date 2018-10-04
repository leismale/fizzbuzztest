//Reusable code version, call the function with parameters so you can re-use it to print other range of numbers, multiples or messages.
let printNumbers = (startNumber, endNumber, multiple1, multiple2, message1, message2) => {
  for (i = startNumber; i <= endNumber; i++) {
    let message = "";
    if (i % (multiple1 * multiple2) == 0) message = message1 + message2;
    else if (i % multiple1 == 0) message = message1;
    else if (i % multiple2 == 0) message = message2;
    console.log(message || i);
  }
};

printNumbers(1, 100, 3, 5, "Fizz", "Buzz");

//Basic FizzBuzz test, just print the right string checking if the number is multiple of 3, 5 or both.
/* 
for (i = 1; i <= 100; i++) {
  let message = "";
  if (i % (3 * 5) == 0) message = "FizzBuzz";
  else if (i % 3 == 0) message = "Fizz";
  else if (i % 5 == 0) message = "Buzz";
  console.log(message || i);
} 
*/
