function companyUsers(arr) {

	let employees = {};
	for(let i = 0; i < arr.length; i++) {
  	let splitArr = arr[i].split(' -> ');
    let company = splitArr.shift();
    let id = splitArr.shift();
    
    if(employees[company] === undefined) {
    	employees[company] = [];
    }
    let idDoesntExist = !Object.values(employees[company]).includes(id);
    if(idDoesntExist) {
    	if(employees[company].length === 0) {
    		employees[company] = [id];
      } else {
    		employees[company] = employees[company].concat(id)
      }
    }
  }
  
  return Object.entries(employees).sort()
    .map(entry => {
        let company = entry.shift();
        let employees = entry[0].map(employee => `-- ${employee}`).join('\n');
        return `${company}` + '\n' + 
        `${employees}`
      }
    )
    .join('\n')
}
