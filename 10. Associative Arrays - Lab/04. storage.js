function storage(input) {

    /*
        Write a function that takes a certain number of items and their quantity.
        If the same item appears more than once, add the new amount to the existing one.
        At the end print all the items and their amount without sorting them.
        The input comes as array of strings.
        Try using a Map().
    */
  
    let itemsMap = new Map();
  
    for (let i = 0; i < input.length; i++) {
      let splitInput = input[i].split(' ');
      let item = splitInput.shift();
      let quantity = Number(splitInput.shift());
  
      if (!itemsMap.has(item)) {
        itemsMap.set(item, +quantity)
      } else {
        let currQuantity = itemsMap.get(item);
        itemsMap.set(item, currQuantity += quantity)
      }
    }
  
    for (let [item, quantity] of itemsMap) {
  
      console.log(`${item} -> ${quantity}`);
  
    }
  
}
