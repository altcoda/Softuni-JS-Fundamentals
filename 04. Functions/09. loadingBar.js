function loadingBar(pct) {

    let bar = '';
    let char = '%';
    let isComplete = pct === 100;
  
    if(isComplete) {
      bar = '[' + `${char}`.repeat(10) + ']';
    
      return (`${pct}% Complete!` + '\n' + bar);
    
    } else {
      let repeatTimes = pct.toString()[0];
      bar = '[' + `${char}`.repeat(repeatTimes) + '.'.repeat(10 - repeatTimes) + ']';
    
      return (`${pct}% ` + bar + '\n' +
              `Still loading...`);
    }
  
}
