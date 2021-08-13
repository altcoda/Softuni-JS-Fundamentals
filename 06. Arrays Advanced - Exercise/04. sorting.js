function sorting(arr) {

    /*
      Write a function that sorts an array of numbers so that the first element is the
      biggest one, the second is thesmallest one, the third is the second biggest one,
      the fourth is the second smallest one and so on.
      Print the elements on one row, separated by single space.
    */
  
    let sorted = arr.sort((a, b) => a - b);
    let newArr = [];
  
    let counter = 1;
    for (let i = 1; i <= sorted.length; i++) {
      if (i % 2 !== 0) {
        newArr.push(sorted[sorted.length - counter])
        counter++;
      } else {
        newArr.push(sorted[counter - 2])
      }
    }

    console.log(newArr.join(' '))
}
