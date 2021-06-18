function equalSums(arr) {

    // Write a function that determines if there exists an element in the array of numbers such 
    // that the sum of the elements on its left is equal to the sum of the elements on its right.
    // If there are NO elements to the left/right, their sum is 0.
    // Print the index that satisfies the required condition or no if there is no such index.
  
    let conditionIsMet = false;
    let indexWhereTrue = 0;
    
    for(let i = 0; i < arr.length - 1; i++) { // ignore the last
      if(i != 0) { // ignore the first
        
        let leftSum = arr.slice(0, i).map(e => parseInt(e)).reduce((a, b) => a + b); // slice and sum
        let  rightSum = arr.slice(i + 1).map(e => parseInt(e)).reduce((a, b) => a + b); // slice and sum
       
        if(leftSum == rightSum) {
          conditionIsMet = true;
          indexWhereTrue = i;
        }
      }
    }
    
    if(arr.length == 1) {
      console.log('0')
    } else if(conditionIsMet) {
      console.log(indexWhereTrue)
    } else {
      console.log('no')
    }
    
}
