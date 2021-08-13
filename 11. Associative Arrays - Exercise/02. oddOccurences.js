function oddOccurences(str) {

    let words = str.toLowerCase().split(' ');
    
    let map = new Map();
    
    for (let word of words) {
      if (map.has(word)) {
        let currOccurences = map.get(word)
        map.set(word, currOccurences+=1)
      } else {
        map.set(word, 1)
      }
    }
    
    let result = [];
    for (let [key, count] of map) {
      if (count % 2 != 0) {
        result.push(key)
      }
    }
    
    return result.join(' ');
}
