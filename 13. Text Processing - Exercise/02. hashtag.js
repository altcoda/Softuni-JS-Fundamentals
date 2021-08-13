function hashtag(str) {

    /* 
      The input will be a single string.
          Find all special words starting with #.
      Word is invalid if it has anything other than letters.
          Print the words you found without the tag each on a new line.
    */
  
    let wordsArr = str.split(' ')
      .map(word => {
        if (word.charAt(0) === "#" && word.length > 1) {
          word = word.slice(1);
          const digits = /^[0-9]/;
          const noDigits = !word.match(digits);
          return noDigits ? word : null
        }
      }).filter(Boolean)
  
    return wordsArr.join('\n')
  
}
  