function theImitationGame(input) {

  let message = input.shift();
  
  let actions = {
  	move: (params) => {
    // Moves the first n letters to the back of the string.
    	let num = Number(params.shift());
      let newEnd = message.substring(0,num);
      let newStart = message.substring(num);
      message = newStart + newEnd;
    },
  	insert: (params) => {
    // Inserts the given value before the given index in the string.
    	let index = Number(params.shift());
      let value = params.shift();
      let left = message.substring(0, index);
      let right = message.substring(index);
      message = left + value + right;
    },
  	changeall: (params) => {
    // Changes all occurrences of the given substring with the replacement text.
    	let [substring, replacement] = params;
      message = message.split(substring).join(replacement);
    },
  }
  
  while(input[0] != 'Decode') {
		let [command, ...params] = input.shift().split('|');
    actions[command.toLowerCase()](params);
  }
  
  console.log(`The decrypted message is: ${message}`)

}
