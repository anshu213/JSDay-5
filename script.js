// Nested loop .........................//..............................................
// *
// **
// ***
// ****
// *****
// ******

let rows = 9;
for (let i = 1; i <= rows; i++){
    let pattern = "";
    for (let j = 1; j <= i; j++){
       pattern += "*"; 
    }
    console.log(pattern);
}

// Q2. Iterate through all numbers from 1 to 45. Print the following:................................
//    For multiples of 3 print “Fizz”
//    For multiples of 5 print “Buzz”
//    For multiples of 3 and 5 print “FizzBuzz”

for (let i = 1; i <= 45; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
      else if(i % 5 === 0){
      console.log("Buzz");
    }
     else if (i % 3 === 0){
        console.log("Fizz");
    }
    else {
        console.log(i);
    }

}
 
