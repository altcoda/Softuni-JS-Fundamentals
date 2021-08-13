function sortAnArrayByTwoCriteria(arr) {

    let sortedArr = arr.sort((a, b) => {
      let firstCriteria = a.length - b.length;
      let secondCriteria = a.localeCompare(b);
      
      return firstCriteria || secondCriteria
    });
    
    return sortedArr.join('\n')
    
}
