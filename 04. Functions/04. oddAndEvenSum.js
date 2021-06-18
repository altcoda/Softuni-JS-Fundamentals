function oddAndEvenSum(num) {

  let evenSum = 0, oddSum = 0;
  let splitNums = num.toString().replace(/,/g, '').split(""); // split and remove commas

  if (splitNums.every(n => n == 0)) { // if each number is 0 sum is 0
    evenSum = 0; oddSum = 0;
  } else {
    if (splitNums.length > 1) { // if there is more than one number sum them

      let evenNums = splitNums
        .map(n => n % 2 == 0 ? Number(n) : null)
        .filter(n => n != null);
      evenSum = evenNums.length >= 2 ? evenNums.reduce((a, b) => a + b) :
        evenNums.length != 0 ? evenNums : 0;

      let oddNums = splitNums
        .map(n => n % 2 != 0 ? Number(n) : null)
        .filter(n => n != null);
      oddSum = oddNums.length >= 2 ? oddNums.reduce((a, b) => a + b) :
        oddNums.length != 0 ? oddNums : 0;

    } else if (num % 2 == 0) {
      evenSum = num;
    } else {
      oddSum = num;
    }
  }

  return (`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
