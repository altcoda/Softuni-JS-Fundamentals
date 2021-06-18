function dungeonestDark(input) {
    
    let inputStr = input.toString(); // convert to string so it can be split
    let inputArr = inputStr.split(/\|| /) // split by | and whitespace
  
    let health = 100;
    let coins = 0;
    let gameWon = true; // init
    
    for(let i = 0; i < inputArr.length; i += 2) {
      let itemOrMonster = inputArr[i];
      let number = Number(inputArr[i + 1]);
      let room = (i / 2) + 1 // because loop starts from zero and is incremented by two
      
      switch(itemOrMonster) {
        case "potion":
          if(health < 100) {
            let healPct = 0;
            if(health + number > 100) {
              healPct = 100 - health;
              health = 100;
            } else {
              health += number;
              healPct = number;
            }
            console.log(`You healed for ${healPct} hp.` + '\n' +
                        `Current health: ${health} hp.`)
          }
          
          break;
          
        case "chest":
          coins += number;
          console.log(`You found ${number} coins.`)
          
          break;
          
        default:
          let damage = number;
          let monster = itemOrMonster;
          
          health -= damage;
          if(health <= 0) {
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${room}`)
            gameWon = false;
            break;
          } else {
            console.log(`You slayed ${monster}.`)
          }
          
          break;
      }
    
      if(!gameWon) { break; }
    
    }
    
    if(gameWon) { 
      console.log(`You've made it!` + '\n' +
                  `Coins: ${coins}` + '\n' +
                  `Health: ${health}`)
    }
  
  }
