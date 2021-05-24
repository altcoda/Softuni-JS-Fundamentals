function bitcoinMining(input) {

  let gains = 0.0, gramOfGold = 67.51, btc = 11949.16;
  let dayOfFirstBTC = 0, hasBTC = false;
  for(let i = 0; i < input.length; i++) {
    let dailyGains = gramOfGold * input[i];
    if((i + 1) % 3 === 0) { // every 3 days
      dailyGains -= (30/100) * dailyGains; // 30 pct less money
    }
    gains += dailyGains;
    if(gains >= btc && !hasBTC) { hasBTC = true; dayOfFirstBTC = i + 1; } // get first day you purchased bitcoin
  }
  
  let ownedBTC = Math.floor(gains / btc);
  console.log(`Bought bitcoins: ${ownedBTC}`)

  if(hasBTC) {
    let moneyLeft = gains - (btc * ownedBTC);
  	console.log(`Day of the first purchased bitcoin: ${dayOfFirstBTC}` + '\n' + `Left money: ${moneyLeft.toFixed(2)} lv.`)
  } else {
    console.log(`Left money: ${gains.toFixed(2)} lv.`)
  }

}