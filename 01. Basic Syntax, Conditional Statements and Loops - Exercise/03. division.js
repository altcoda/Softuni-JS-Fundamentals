function division(num) {

  let divisors = [10, 7, 6, 3, 2];
  let isDivisible = false;
  for (let i = 0; i <= divisors.length; i++) {
  	// Find highest divisor from the ones listed and break loop
    if ((num % divisors[i]) == 0) {
      isDivisible = true;
      console.log(`The number is divisible by ${divisors[i]}`)
      break;
    }
  }
  if (isDivisible === false) {
    console.log(`Not divisible`)
  }

}