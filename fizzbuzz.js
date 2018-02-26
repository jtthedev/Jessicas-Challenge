/* This code is creating a random number generator that also tests to see
if the number is divisible by 3 or 5 or both. If divisable by 5 it will alert Fizz
if divisible by 5 it will pop Buzz
if both it will FizzBuzz */

var randoNo = Math.round(Math.random() * 15);
// var randoNo = 15;

console.log(randoNo);

if (randoNo%3 === 0 && randoNo != 0){
  if(randoNo%5 === 0){
    alert("FizzBuzz")
  }
  else{
  alert("Fizz " + randoNo)
  }
}
else if(randoNo%5 === 0 && randoNo != 0){
  alert("Buzz " + randoNo);
}

else{
  console.log(randoNo);
}

---------------------------------------------
/* This code is the more complex version of the fizz buzz game that may actually be asked my prospecting employers. The code prints numbers 1 - 100 to the console and if the number is divisible by 3 it pops fizz if by 5 it pops buzz if by both it pops fizzbuzz... I had issue with this one because of the brackets... be mindful of your brackets */

for (var i = 1; i <= 100; i++){
  if(i %3 ===0){
    if(i %3 ===0 && i%5 ===0){
      console.log("FizzBuzz");
    }
    else {
      console.log("Fizz")
    }
  }
    else if (i %5 === 0 ){
      console.log("Buzz");
    }
  else{
    console.log(i);
  }
}


