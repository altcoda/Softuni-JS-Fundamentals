function race(input) {

    let people = input.shift().split(', ');
    let participants = [];
    people.map(name => participants[name] = 0)
  
    while (input[0] != 'end of race') {
      let info = input.shift();
      let namePattern = /[A-Za-z]/g;
      let digitsPattern = /[0-9]/g;
      let name = info.match(namePattern).join('');
      let distanceRan = info.match(digitsPattern).map(Number).reduce((a, b) => a + b);
  
      if (participants.hasOwnProperty(name)) {
        participants[name] += (distanceRan != null ? distanceRan : 0);
      }
  
    }
  
    let sorted = Object.entries(participants).sort((a, b) => b[1] - a[1]);
  
    for (let place = 1; place <= 3; place++) {
  
      let name = sorted[place - 1][0];
  
      switch (place) {
        case 1:
            console.log(`1st place: ${name}`)
          break;
        case 2:
            console.log(`2nd place: ${name}`)
          break;
        case 3:
            console.log(`3rd place: ${name}`)
          break;
        default:
          break;
      }
  
    }
  
}
