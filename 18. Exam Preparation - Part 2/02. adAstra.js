function adAstra(input) {

    let str = input.shift();
    let re = /([#|\|])[A-Za-z\s]+(\1)\d{2}(\/)\d{2}(\/)\d{2}(\1)\d{1,5}(\1)/g;
    let matches = str.match(re);
  
    let days = 0;
    if (matches !== null) {
      matches = matches.map(match => {
        match = match.includes('|') ? match.split('|') : match.split('#');
        return match.filter(value => value != '');
      });
      let totalCalories = matches.map(match => Number(match[2])).reduce((a, b) => a + b);
      days = Math.floor(totalCalories / 2000);
    }
  
    console.log(`You have food to last you for: ${days} days!`)
  
    for (let match in matches) {
      let item = matches[match].shift();
      let expiration_date = matches[match].shift();
      let calories = parseInt(matches[match].shift());
  
      console.log(`Item: ${item}, Best before: ${expiration_date}, Nutrition: ${calories}`)
    }

}
