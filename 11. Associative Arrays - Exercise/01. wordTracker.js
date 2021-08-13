function countStrOccurrences(arr) {

    let wordsToSearch = arr.shift().split(' ');

    let occurences = {};
    wordsToSearch.forEach(word => occurences[word] = [])
    arr.forEach(word => { 
        if(wordsToSearch.includes(word)) { occurences[word]++ } 
    })

    return Object.entries(occurences)
      .sort((a, b) => b[1] - a[1]) // sort descending
      .map((entry) => {
        let word = entry[0];
        let count = entry[1] > 0 ? entry[1] : 0;
        return `${word} - ${count}`
      })
      .join('\n')
}
