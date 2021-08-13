function revealWords(words, sentence) {

    /* 
      Write a function, which receives two parameters.
      The first parameter will be a string with some words separated by ', '.
      The second parameter will be a string which contains templates containing *
      Find the word with the exact same length as the template and replace it.
    */
  
    words.split(', ').map(word => {
      let match = ('*').repeat(word.length);
      sentence = sentence.replace(match, word);
    })
  
    return sentence;
  
}
