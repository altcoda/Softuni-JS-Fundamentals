function heartDelivery(input) {

    let neighbourhood = input.shift().split('@').map(Number);
  
    let hadValentines = new Set();
    let index = 0;
    let gameEnd = false;
  
    for (let i = 0; i < input.length; i++) {
      let commandSplit = input[i].split(' ');
      let command = commandSplit.shift();
      let jumpSize = Number(commandSplit.shift());
  
      switch (command) {
        case "Jump":
          index += jumpSize;
          if (index >= neighbourhood.length) { index = 0; }
          if(neighbourhood[index] <= 0) { hadValentines.add(index) }
          
          if (hadValentines.has(index)) {
            console.log(`Place ${index} already had Valentine's day.`)
          } else {
            neighbourhood.splice(index, 1, neighbourhood[index] - 2);
            
            if (neighbourhood[index] <= 0) {
              console.log(`Place ${index} has Valentine's day.`);
              hadValentines.add(index)
            }
          }
          break;
        case "Love!":
          gameEnd = true;
          break;
        default:
          break;
      }
  
      if (gameEnd) { break; }
  
    }
  
    let missionResults = hadValentines.size === neighbourhood.length ?
      `Mission was successful.` :
      `Cupid has failed ${neighbourhood.length - hadValentines.size} places.`;
  
    return (`Cupid's last position was ${index}.` + '\n' + missionResults)
  
}
