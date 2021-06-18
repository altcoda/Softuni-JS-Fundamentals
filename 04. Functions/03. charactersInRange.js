function charactersInRange(char1,char2) {

    // Write a function that receives two characters and prints on a single line all the characters 
    // in between them according to the ASCII code.
    // Keep in mind that the second character code might be before the first one inside the ASCII table.
  
    let firstCharAsNum = char1.charCodeAt(0);
    let secondCharAsNum = char2.charCodeAt(0);
    
    let start = firstCharAsNum < secondCharAsNum ? firstCharAsNum : secondCharAsNum;
    let end = firstCharAsNum < secondCharAsNum ? secondCharAsNum : firstCharAsNum;
    
    let result = '';
    for(let i = start + 1; i < end; i++) {
      let char = String.fromCharCode(i)
      result += char + ' ';
    }
    return result.trim()
  
}
