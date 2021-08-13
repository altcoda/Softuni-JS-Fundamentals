function destinationMapper(input) {

    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let matches = input.match(pattern);
  
    let points = 0;
    if (matches != null) {
      matches = matches.map(match => {
        match = match.substring(1, match.length - 1);
        points += match.length;
        return match
      })
    }
    
    console.log(`Destinations: ${matches != null ? matches.join(', ') : ''}`)
    console.log(`Travel Points: ${points}`)

}
