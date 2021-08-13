function houseParty(array) {

  let guestList = []
  let log = []
  
  for (let i = 0; i < array.length; i++) {
    let name = array[i].split(' ').shift()
    let going = array[i].includes('is going');
    let onTheList = guestList.includes(name);
    
    if (going) {
      if(onTheList) { 
        log.push(`${name} is already in the list!`)
      }
      else {
        guestList.push(array[i].split(' ').shift())
      }
    }
    else {
      if(onTheList) {
        guestList.splice(guestList.indexOf(name), 1)
      }
      else {
        log.push(`${name} is not in the list!`);
      }
    }
    
  }

  return (log.join('\n') + '\n' + 
    guestList.join('\n'))

}
