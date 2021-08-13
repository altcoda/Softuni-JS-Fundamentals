function plantDiscovery(input) {

  let catalogue = {};

  let n = Number(input.shift());

  // get information about plants n times
  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split('<->');

    catalogue[name] = {
      rarity: Number(rarity),
      ratings: [],
      avgRating: 0
    };
  }

  let actions = {
    rate: (line) => {
      let [name, rating] = line.split(' - ');

      if (catalogue[name] != undefined) {
        let plant = catalogue[name];
        plant.ratings.push(Number(rating));

        let total = plant.ratings.reduce((a, b) => a + b);
        plant.avgRating = total / plant.ratings.length;

      } else {
        console.log('error')
      }
    },
    update: (line) => {
      let [name, rarity] = line.split(' - ');

      if (catalogue[name] != undefined) {
        let plant = catalogue[name];
        plant.rarity = Number(rarity);

      } else {
        console.log('error')
      }
    },
    reset: (name) => {
      if (catalogue[name] != undefined) {
        catalogue[name].ratings.length = 0
        catalogue[name].avgRating = 0
      } else {
        console.log('error')
      }
    }
  }

  // get commands to update the catalogue
  while (input[0] != 'Exhibition') {
    let [command, params] = input.shift().split(': ');
    let action = actions[command.toLowerCase()];
    action(params);
  }

  let sorted = Object.entries(catalogue).sort((a,b) => {
    return (b[1].rarity - a[1].rarity) || (b[1].avgRating - a[1].avgRating)
  })

  console.log(`Plants for the exhibition:`);
  for (let [name, plant] of sorted) {
    console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
  }

}
