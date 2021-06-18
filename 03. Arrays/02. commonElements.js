function commonElements(arr1, arr2) {

  let common = arr1.filter(element => arr2.includes(element));

  console.log(common.join('\r\n'))

}
