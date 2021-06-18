function maxSequenceOfEqualElements(input) {

    // Write a function that finds the longest sequence of equal elements in an array of numbers.
    // If several longest sequences exist, print the leftmost one.

    let arr = [];
    if(input.toString().includes(',') == false) { // turn it to a string to see if the numbers were separated
      arr = input.toString().split(' '); // if not split by space to separate them
    } else { arr = input; }
    
    let arrays = [] // this will collect all arrays
    let appendArr = [] // array to append
    let firstNumPushed = false;
   
    for(let i = (arr.length - 1); i >= 0; i--) { // start from the last number so the last sequence will be the leftmost
      if(arr[i] === arr[i - 1]) { // if the numbers repeat
        if(firstNumPushed == false) { appendArr.push(arr[i]) } // push the previous number to the array
        firstNumPushed = true; // define it as pushed so it won't be added again
        appendArr.push(arr[i]) // add the repeating number each time it repeats
      } else if(arr[i] != arr[i - 1]) { // if they don't repeat anymore
        firstNumPushed = false; // set repeated number to false so next time they repeat it will be added
        if(appendArr.length > 0) { arrays.push(appendArr) } // push sequence if it exists
        appendArr = [] // clear array for next sequence
      }
    }
    
    // get index of longestArr
    let prevArrLength = 0;
    let longestArrIndex = 0;
    for(let i = (arrays.length - 1); i >=  0; i--) {
      if(arrays[i].length > prevArrLength) {
        longestArrIndex = i
      }
      prevArrLength = arrays[i].length;
    }
    console.log(arrays[longestArrIndex].join(" ")) // print the leftmost sequence
  }
