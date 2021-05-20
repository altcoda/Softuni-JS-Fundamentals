function mining(input) {

  let gains = 0.0, gramOfGold = 67.51, BTC = 11949.16;
  let firstBTC = 0, hasBTC = false;
	for(let i = 0; i < input.length; i++) {
    let dailyGains = gramOfGold * input[i];
  	if((i + 1) % 3 === 0) { // every 3 days
    	dailyGains -= (30/100) * dailyGains; // 30 pct less money
    }
    gains += dailyGains;
    if(gains >= BTC && !hasBTC) { hasBTC = true; firstBTC = i + 1; } // get first day you purchased bitcoin
  }
  
  let ownedBTC = Math.floor(gains / BTC);
  
  console.log(`Bought bitcoins: ${ownedBTC}`)
  if(hasBTC) {
  	console.log(`Day of the first purchased bitcoin: ${firstBTC}`)
  	console.log(`Left money: ${(gains - (BTC * ownedBTC)).toFixed(2)} lv.`)
  } else {
  	console.log(`Left money: ${gains.toFixed(2)} lv.`)
  }
  
}