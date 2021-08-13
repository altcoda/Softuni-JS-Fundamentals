function cutAndReverse(str) {

    /*
      The input will be a single string.
      Write a function that cuts the given string into half and reverse the two halves.
      Print each half on a separate line.
    */
    
    if (str.length % 2 === 0) {
      let right = str.substring(str.length / 2).split('').reverse().join('');
      let left = str.substring(0, str.length / 2).split('').reverse().join('');
      console.log(left);
      console.log(right);
    }
    
    return;
    
}
