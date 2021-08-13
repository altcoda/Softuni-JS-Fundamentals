function worldTour(input) {

    // Until you receive the command "Travel" you will be given some commands to manipulate that initial string.
  
    let stops = input.shift();
  
    function valid(index) {
      return (index >= 0) && (index < stops.length)
    }
  
    let actions = {
      "Add Stop": (params) => {
        let index = Number(params.shift());
        let location = params.shift();
        if (valid(index)) {
          let stopsOne = stops.substring(0, index);
          let stopsTwo = stops.substring(index);
          stops = stopsOne + location + stopsTwo;
        }
      },
      "Remove Stop": (params) => {
        let indexStart = Number(params.shift());
        let indexEnd = Number(params.shift());
  
        if (valid(indexStart) && valid(indexEnd)) {
          let left = stops.substring(0, indexStart);
          let right = stops.substring(indexEnd + 1);
          stops = left + right;
        }
      },
      "Switch": (params) => {
        let [oldLocation, newLocation] = params;
        stops = stops.replace(oldLocation, newLocation);
      }
    }
  
    while (input[0] !== "Travel") {
      let line = input.shift().split(':');
      let command = line.shift();
      let params = line;
      let action = actions[command];
  
      action(params)
      console.log(stops)
    }
  
    console.log(`Ready for world tour! Planned stops: ${stops}`)
  
}
