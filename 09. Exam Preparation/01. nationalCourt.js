function nationalCourt(input) {

    let customersHelpedPerHour = Number(input.shift()) + Number(input.shift()) + Number(input.shift());
    let customersCount = Number(input.shift());
    let hours = 0;
    
    while(customersCount > 0) {
      hours++;
      if (hours % 4 === 0) { continue; } // they have a break every 4th hour
      customersCount -= customersHelpedPerHour;
      if (customersCount === 0) { break; }
    } 
  
    return (`Time needed: ${hours}h.`)
}
