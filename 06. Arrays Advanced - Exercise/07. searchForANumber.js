function searchForANumber(arr1, arr2) {

    const [numOfElsToTake, numOfElsToDel, wantedNum] = [arr2.shift(), arr2.shift(), arr2]
  
    let findNumber = arr1.slice(0, numOfElsToTake)
        .slice(numOfElsToDel)
        .filter(num => wantedNum.includes(num));
  
    const wantedNumTimes = findNumber.length;
  
    return `Number ${wantedNum} occurs ${wantedNumTimes} times.`
}
