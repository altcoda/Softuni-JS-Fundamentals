function NxN_matrix(n) {

  let str = ''
  for(let i = 0; i < n; i++) {
    str += `${n} `
  }
  
  let matrix = '';
  for(let i = 0; i < n; i++) {
    matrix += str.trim() + '\n'
  }

  return matrix.trim();

}
