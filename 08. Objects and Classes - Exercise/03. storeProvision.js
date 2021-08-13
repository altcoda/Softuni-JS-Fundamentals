function storeProvision(currentStock, toDeliver) {

    const products = []
  
    currentStock.forEach((item, index) => {
      if (index % 2 === 0) {
        const quantity = Number(currentStock[index + 1]);
        products.push({
          name: item,
          quantity: quantity
        })
      }
    })
  
    toDeliver.forEach((item, index) => {
      if (index % 2 === 0) {
        const quantity = Number(toDeliver[index + 1]);
        if (Object.keys(products)
          .find(key => products[key].name == item)
          !== undefined) {
          products[key].quantity += quantity;
        } else {
          products.push({
            name: item,
            quantity: quantity
          })
        }
      }
    })
  
    for (let key in products) {
      console.log(`${products[key].name} -> ${products[key].quantity}`)
    }
  
}
