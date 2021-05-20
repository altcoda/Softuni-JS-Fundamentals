function triangle(num) {
	for(let i = 1; i <= num; i++) {
  	let str = '';
    for(let x = 1; x <= i; x++) {
     str += i + ` `;
    }
    console.log(str)
  }
}