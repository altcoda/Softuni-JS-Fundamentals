function phoneBook(input) {

    /*
      Write a function that stores information about a person’s name and his phone number.
      The input comes as an array of strings. Each string contains the name and the number.
      If you receive the same name twice just replace the number.
      At the end print the result without sorting it. Try using an associative array.
    */
  
    let phones = {};
    for (let i = 0; i < input.length; i++) {
      let splitInput = input[i].split(' ');
      let name = splitInput.shift();
      let number = splitInput.shift();
      phones[name] = number;
    }
  
    return Object.entries(phones)
        .map(entry => {
            let name = entry[0];
            let phone = entry[1];
            return `${name} -> ${phone}`
        })
        .join('\n')
}
