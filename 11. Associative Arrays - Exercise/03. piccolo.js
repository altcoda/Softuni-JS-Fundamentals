function piccolo(str) {

    let carNumbers = new Set();
  
    for (let i = 0; i < str.length; i++) {
      let arr = str[i].split(', ')
      let action = arr.shift();
      let carNumber = arr.shift();
  
      switch (action) {
        case "OUT":
          carNumbers.delete(carNumber)
          break;
        case "IN":
          carNumbers.add(carNumber)
          break;
        default:
          break;
      }
  
    }
  
    let inParkingLot = [...carNumbers].sort().join('\n')
  
    return carNumbers.size == 0 ? `Parking Lot is Empty` : inParkingLot
  
}
