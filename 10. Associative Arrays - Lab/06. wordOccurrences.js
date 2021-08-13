function wordOccurences(arr) {

    /* 
      Write a function that counts the times each word occurs in a text.
      Print the words sorted by count in descending order.
      The input comes as an array of strings.
    */
  
    let timesOccuring = []
  
    arr.forEach(word => {
      if (!timesOccuring.hasOwnProperty(word)) {
        timesOccuring[word] = 1;
      } else {
        timesOccuring[word] += 1;
      }
    })
  
    let sortedDescending = Object.keys(timesOccuring).sort(function(a, b) {
      return timesOccuring[b] - timesOccuring[a];
    })
  
    sortedDescending.forEach(word => {
      console.log(`${word} -> ${timesOccuring[word]} times`)
    })
  
}
