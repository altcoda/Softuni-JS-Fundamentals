function replaceRepeatingChars(str) {

    /*
      Write a function that receives a single string and replaces any sequence of
      the same letters with a single corresponding letter.
    */
    
    let re = /(.)\1{1,}/g
    let matches = str.match(re);
    if (matches != null) {
      matches.forEach(match => {
        str = str.replace(match, match.charAt(0))
      })
    }
    return str;
}
