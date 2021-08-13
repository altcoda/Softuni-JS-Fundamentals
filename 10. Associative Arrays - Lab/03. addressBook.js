function addressBook(arr) {

  /*
    Write a function that stores information about a person’s name and his address.
    The input comes as an array of strings. 
    Each string contains the name and the address separated by a colon.
    If you receive the same name twice just replace the address.
    At the end print the full list, sorted alphabetically by the person’s name.
  */

  let addresses = {};

  for (let i = 0; i < arr.length; i++) {
    let splitInput = arr[i].split(':');
    let name = splitInput.shift();
    let address = splitInput.shift();

    addresses[name] = address;
  }

  return (Object.entries(addresses)
    .map(entry => `${entry[0]} -> ${entry[1]}`)
    .sort()
    .join('\n'))

}
