function maxNum(arr) {

    // Get all numbers that are bigger than the numbers on the right
    
    let checkArr = [];
    let resultArr = [];
    let currentMax = 0;
      for(let i = (arr.length - 1); i >= 0; i--) {
          checkArr.push(parseInt(arr[i]))
        currentMax = Math.max(...checkArr); // max number so far including current
          if(parseInt(arr[i]) == currentMax && parseInt(arr[i]) != parseInt(arr[i - 1])) { // check that it is the biggest so far and different from the previous
            resultArr.push(parseInt(arr[i]))
          }
    }

    console.log(resultArr.reverse().join(' ')) // print in the right order separated by space

}
