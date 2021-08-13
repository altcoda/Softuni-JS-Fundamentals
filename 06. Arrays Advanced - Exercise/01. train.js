function train(array) {

    let numOfPassengers = array[0].split(' ');
    let maxCapacity = array[1];
  
    let addWagonCommands = array.slice(2).filter(command => command.includes('Add'));
    addWagonCommands.map(command => numOfPassengers.push(command.split(' ')[1]))
  
    let newPassengers = array.slice(2).filter(command => command.includes('Add') == false).filter(num => parseInt(num));
  
    for (let i = 0; i < newPassengers.length; i++) {
      let wagonWithCapacityIndex = numOfPassengers.map(num => parseInt(num) + parseInt(newPassengers[i]) <= maxCapacity ? numOfPassengers.indexOf(num) : null).find(num => num != null);
      
      numOfPassengers.splice(wagonWithCapacityIndex, 1, parseInt(numOfPassengers[wagonWithCapacityIndex]) + parseInt(newPassengers[i]))
    }
  
    console.log(numOfPassengers.join(' '))
  
}
