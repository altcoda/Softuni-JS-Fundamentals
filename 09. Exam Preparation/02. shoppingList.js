function shoppingList(input) {

    let list = input.shift().split('!')

    for (let i = 0; i < input.length; i++) {
      let splitCommand = input[i].split(' ');
      let command = splitCommand.shift();
      let items = splitCommand;
      let item = items.shift();
  
      switch (command) {
        case "Urgent":
          if (!list.includes(item)) {
            list.splice(0, 0, item)
          }
          break;
        case "Unnecessary":
          if (list.includes(item)) {
            let itemIndex = list.indexOf(item);
            list.splice(itemIndex, 1)
          }
          break;
        case "Correct":
          let newItem = items.shift();
  
          if (list.includes(item)) {
            let itemIndex = list.indexOf(item);
            list.splice(itemIndex, 1, newItem)
          }
          break;
        case "Rearrange":
          if (list.includes(item)) {
            let itemIndex = list.indexOf(item);
            list.splice(itemIndex, 1)
            list.push(item)
          }
          break;
        default:
          break;
      }
    }
  
    return (list.join(', '))
}
