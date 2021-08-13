function arrayManipulator(intArr, commandsArr) {
  intArr = intArr.map(Number);

  let index = 0, num = 0, end = false;

  for (let item of commandsArr) {
    let splitData = item.split(' ');
    let command = splitData.shift();
    let effectNums = splitData.map(Number);

    switch (command) {
      case "add": // adds element at the specified index
      	index = effectNums.shift();
        num = effectNums.shift();
        intArr.splice(index, 0, num)
        break;
      case "addMany": // adds a set of elements at the specified index
        index = effectNums.shift();
        let nums = effectNums;
        intArr.splice(index, 0, ...nums)
        break;
      case "contains": // prints the index of the first occurrence in the array or -1 if not found
      	num = effectNums.shift();
        index = intArr.indexOf(num);
        console.log(index)
        break;
      case "remove": // removes the element at the specified index
        num = effectNums.shift();
        intArr.splice(num, 1)
        break;
      case "shift": // shifts every element of the array the number of positions to the left (with rotation)
        num = effectNums.shift()
        for (let i = 0; i < num; i++) {
          let move = intArr.shift();
          intArr.push(move)
        }
        break;
      case "sumPairs":
      	let newArr = []
				for(let i = 0; i < intArr.length; i += 2) {
          let sum = intArr[i] + intArr[i + 1];
          let isValidSum = !isNaN(sum) && sum !== undefined && sum !== null;
          if(isValidSum) {
          	newArr.push(intArr[i] + intArr[i + 1])
          } else {
          	newArr.push(intArr[i])
          }
    		}
        intArr = newArr;
        break;
      case "print":
        console.log(`[ ${intArr.join(', ')} ]`)
        end = true;
        break;
      case "default":
        break;
    }
    if (end) {
      break;
    } // break out of for loop after print to avoid more input
  }

}
