function meetings(input) {

    /*
      Write a function that manages meeting appointments.
      The input comes as an array of strings. Each string contains a weekday and person’s name.
      For each successful meeting, print a message. If you receive the same weekday twice, the 
      meeting cannot be scheduled so print a conflict message.
      At the end print a list of all successful meetings.
    */


    let scheduledMeetings = {};
  
    for (let i = 0; i < input.length; i++) {
      let splitInput = input[i].split(' ');
      let weekday = splitInput.shift();
      let name = splitInput.shift();
  
      if (scheduledMeetings.hasOwnProperty(weekday)) {
        console.log(`Conflict on ${weekday}!`)
      } else {
        scheduledMeetings[weekday] = name;
        console.log(`Scheduled for ${weekday}`)
      }
    }
  
    return (Object.entries(scheduledMeetings)
      .map(entry => `${entry[0]} -> ${entry[1]}`)
      .join('\n'))

}
