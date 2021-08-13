function employeesInformation(employeeNames) {

    let employees = [];

    for(let i = 0; i < employeeNames.length; i++) {
        employees.push({
            employeeName: employeeNames[i],
            personalID: employeeNames[i].length
        })
    }
  
    let result = employees.map(employee => `Name: ${employee.employeeName} -- Personal Number: ${employee.personalID}` + '\n');
    console.log(result.join(' ').trim())
  
}
