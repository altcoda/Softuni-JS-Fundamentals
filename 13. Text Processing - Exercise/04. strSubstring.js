function strSubstring(word, text) {

    /* 
      The input will be given as two separated strings.
      Write a function that checks given text for containing a given word.
      The comparison should be case insensitive.
      Once you find match, print the word and stop the program.
      If you don't find the word print "{word} not found!"
    */
    
    text = text.split(' ');
    
    let match = text.find(w => {
        let wordMatch = word.toUpperCase().includes(w.toUpperCase()) || word.toLowerCase().includes(w.toLowerCase());
        if(wordMatch) {
          return word
        }
    })
    
    return match ? word : `${word} not found!`
  
}
