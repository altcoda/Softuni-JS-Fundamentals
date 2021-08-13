function furniture(arr) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
    let bought = [];
    let total = 0;
  
    while (arr[0] != 'Purchase') {
      let line = arr.shift();
      let match = pattern.exec(line);
  
      if (match != null) {
        let {name, price, qty} = match.groups;
        bought.push(name);
        price = Number(price);
        qty = Number(qty);
        total += (price * qty);
      }
    }
  
    if (bought.length > 0) {
      console.log(`Bought furniture:`)
      console.log(bought.join('\n'))
      console.log(`Total money spend: ${total.toFixed(2)}`)
    }
}
