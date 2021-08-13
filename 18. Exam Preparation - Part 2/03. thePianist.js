function thePianist(input) {

    let n = Number(input.shift());
  
    let pieces = {};
  
    for (let i = 0; i < n; i++) {
      let [piece, composer, key] = input.shift().split('|');
  
      pieces[piece] = {
        composer: composer,
        key: key
      }
    }
  
    let actions = {
      add: (params) => {
        let [piece, composer, key] = params;
        if (pieces[piece] != undefined) {
          console.log(`${piece} is already in the collection!`)
        } else {
          pieces[piece] = {
            composer: composer,
            key: key
          }
          console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        }
      },
      remove: (params) => {
        let piece = params;
        if (pieces[piece] != undefined) {
          delete pieces[piece]
          console.log(`Successfully removed ${piece}!`)
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
      },
      changekey: (params) => {
        let [piece, newKey] = params;
        if (pieces[piece] != undefined) {
          pieces[piece].key = newKey;
          console.log(`Changed the key of ${piece} to ${newKey}!`)
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
      }
    }
  
    while (input[0] != 'Stop') {
      let [command, ...params] = input.shift().split('|');
      actions[command.toLowerCase()](params)
    }
  
    let sorted = Object.entries(pieces).sort((a, b) => {
      return b[1].composer - a[1].composer
    }).sort()
  
    for (let [name, details] of sorted) {
      console.log(`${name} -> Composer: ${details.composer}, Key: ${details.key}`);
    }
  
}
