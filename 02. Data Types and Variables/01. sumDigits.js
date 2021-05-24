function sumDigits(num) {
  let sum = num.toString().split('').map(e => parseInt(e)).reduce((a, b) => a + b);
  console.log(sum)
}