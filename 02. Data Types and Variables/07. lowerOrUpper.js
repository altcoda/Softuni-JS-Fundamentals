function isUpperCase(char) {
    let uppercase = char.toString().toUpperCase();
    let isUppercase = uppercase == char;
    console.log(isUppercase ? 'upper-case' : 'lower-case')
}