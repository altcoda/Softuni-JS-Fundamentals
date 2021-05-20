function vacation(numOfPeople, groupType, dayOfTheWeek) {
  
    let prices = {
        "Students" : {
          "Friday" : 8.45,
          "Saturday" : 9.80,
          "Sunday" : 10.46,
      },
        "Business" : {
          "Friday" : 10.90,
          "Saturday" : 15.60,
          "Sunday" : 16,
      },
        "Regular" : {
          "Friday" : 15,
          "Saturday" : 20,
          "Sunday" : 22.5,
      }
    }
    
    let todaysPrice = prices[groupType][dayOfTheWeek];
    let price = numOfPeople * todaysPrice;
    
    switch(groupType) {
        case "Students":
        if(numOfPeople >= 30) { price -= (15/100) * price; }
          break;
        case "Business":
            if(numOfPeople >= 100) { price -= todaysPrice * 10 }
          break;
        case "Regular":
        if(numOfPeople >= 10 && numOfPeople <= 20) { price -= (5/100) * price; }
          break;
        case "default":
          break;
    }
    
    console.log(`Total price: ${price.toFixed(2)}`)
}