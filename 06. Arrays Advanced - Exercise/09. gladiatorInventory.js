function gladiatorInventory(inventory) {

    let equipment = inventory.shift().split(' ');
  
    for (let i = 0; i < inventory.length; i++) {
      let splitInput = inventory[i].split(' ');
      let command = splitInput.shift();
      let item = splitInput.shift();
      switch (command) {
        case "Buy":
          if (!equipment.includes(item)) {
            equipment.push(item)
          }
          break;
        case "Trash":
          if (equipment.includes(item)) {
            equipment.splice(equipment.indexOf(item), 1)
          }
          break;
        case "Repair":
          if (equipment.includes(item)) {
            equipment.splice(equipment.indexOf(item), 1)
            equipment.push(item)
          }
          break;
        case "Upgrade":
          let itemToUpgrade = item.split('-')[0];
          let upgradeType = item.split('-')[1];
          if (equipment.includes(itemToUpgrade)) {
            equipment.splice(equipment.indexOf(itemToUpgrade) + 1, 0, `${itemToUpgrade}:${upgradeType}`)
          }
          break;
        default:
          break;
      }
    }
  
    return equipment.join(' ')
  
}
