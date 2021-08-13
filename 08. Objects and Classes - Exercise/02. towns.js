function town(townInfo) {

    let towns = [];
    
    townInfo.map((town) => {
      let info = town.split(' | ');
      towns.push({
        town: info.shift(),
        latitude: Number(info.shift()).toFixed(2),
        longitude: Number(info.shift()).toFixed(2)
      })
    })
  
    for(let i = 0; i < towns.length; i++) {
        console.log(towns[i])
    }
  
}
