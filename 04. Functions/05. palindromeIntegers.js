function palindromeIntegers(arr) {
    let isPalindrome = arr.map(n => n.toString().split("").reverse().join("") == n ? true : false); // reverse each number and check
    return isPalindrome.join('\n')
}
