function printAndSum(rangeStart, rangeEnd) {
    let str = '', sum = 0;
      for(let n = rangeStart; n <= rangeEnd; n++) {
      str += n + ` `;
      sum += n;
    }
    console.log(str + '\n' + 
        `Sum: ` + sum)
}