function bombNumbers(arr, bombs) {
  let [bomb, power] = bombs;

  while(arr.includes(bomb)) {
    let bombIndex = arr.indexOf(bomb);
    let startIndex = Math.max(bombIndex - power, 0);
    arr.splice(bombIndex, power + 1);
    arr.splice(startIndex, power)
  }

  let sum = 0;
  for (let num of arr) {
      sum += num;
  }

  return sum;

}
