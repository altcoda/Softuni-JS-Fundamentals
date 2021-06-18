function addAndSubstract(arr) {

    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
  
      let num = arr[i];
      if (num % 2 == 0) { // If the number is even - add to its value its index position
        newArr.push(num + i)
      } else { // If the number is odd - subtract from its value its index position
        newArr.push(num - i)
      }

    }

    let originalArrSum = arr.map(e => parseInt(e)).reduce((a, b) => a + b);
    let newArrSum = newArr.map(e => parseInt(e)).reduce((a, b) => a + b);

    console.log(newArr)
    console.log(originalArrSum)
    console.log(newArrSum)

}
