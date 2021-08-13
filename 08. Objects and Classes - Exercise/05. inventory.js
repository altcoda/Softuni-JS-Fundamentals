function inventory(heroes) {

    let heroesList = [];
  
    for (let i = 0; i < heroes.length; i++) {
  
      let splitInfo = heroes[i].split(' / ');
      let name = splitInfo.shift();
      let level = Number(splitInfo.shift());
      let items = [...splitInfo];
  
      heroesList.push({
        name: name,
        level: level,
        items: items
      })
  
    }
    
    let sortedAscending = Object.keys(heroesList).sort(function(a, b) {
      return heroesList[a].level - heroesList[b].level;
    })
  
    sortedAscending.map(key => {
      const itemsOutput = heroesList[key].items.toString().split(', ').sort().join(', ');
      console.log(`Hero: ${heroesList[key].name}`)
      console.log(`level => ${heroesList[key].level}`)
      console.log(`items => ${itemsOutput}`)
    })

}
