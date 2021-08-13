function schoolGrades(arr) {

    /* 
      Write a function to store students with all of their grades.
      If a student appears more than once, add the new grades.
      At the end print the students sorted by average grade. The input comes as array of strings.
    */
  
    let studentsMap = new Map();
  
    for (let string of arr) {
      let splitArr = string.split(' ');
      let student = splitArr.shift();
      let grades = [...splitArr];
  
      if (!studentsMap.has(student)) { // set student
        studentsMap.set(student, []);
      }
      studentsMap.set(student, studentsMap.get(student).concat(grades));
    }
  
    function average(arr) {
      return arr.map(Number).reduce((a, b) => a + b) / arr.length;
    }
  
    let sortedByAvg = Array.from(studentsMap.entries()).sort((a, b) => average(a[1]) - average(b[1]));
  
    let grades = [];
    for (let student of sortedByAvg) {
      grades = [...student[1]];
      console.log(`${student[0]}: ${grades.join(', ')}`)
    }
  
}
