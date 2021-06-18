function passwordValidator(password) {

    // This is just an exercise.
    
    const passwordArr = password.toString().split('');
    const lengthFromSixToTen = passwordArr.length >= 6 && passwordArr.length <= 10;
    
    let hasOnlyDigitsAndLetters = true; // initial value is set to true intentionally
    let digits = 0;
    
    for(let i = 0; i < passwordArr.length; i++) {
    
      let char = passwordArr[i];
      
      if(hasOnlyDigitsAndLetters) { // check while it's true
        hasOnlyDigitsAndLetters =
        char.charCodeAt() >= 48 && char.charCodeAt() <= 57 || // is a digit
        char.charCodeAt() >= 65 && char.charCodeAt() <= 90 || // a small letter
        char.charCodeAt() >= 97 && char.charCodeAt() <= 122 ? // or a big letter
        true : false;
      }
      
      if(digits < 2 && char.charCodeAt() >= 48 && char.charCodeAt() <= 57) { digits++; }
    }
    
    const hasTwoDigits = digits >= 2;
    
    let warning = [];
    
    if(lengthFromSixToTen && hasOnlyDigitsAndLetters && hasTwoDigits) {
      return 'Password is valid'
    } else {
      if(!lengthFromSixToTen) {
        warning.push('Password must be between 6 and 10 characters')
      }
      if(!hasOnlyDigitsAndLetters) {
        warning.push('Password must consist only of letters and digits')
      }
      if(!hasTwoDigits) {
        warning.push('Password must have at least 2 digits')
      }
      return warning.join('\n')
    }
  
}
