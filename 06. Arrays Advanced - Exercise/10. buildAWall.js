function buildAWall(arr) {

    /* 
      Write a program that keeps track of the construction of a 30-foot wall.
    
      You will be given an array of strings that must be parsed as numbers,
      representing the initial height of mile-long sections of the wall, in feet.
    
      Each section has its own construction crew that can add 1 foot of height per day by using 195 cubic yards of concrete.
      All crews work simultaneously. When a section of the wall is complete, its crew is relieved.
    
      Your program needs to keep track of how much concrete is used daily until the completion of the entire wall.
    
      At the end, print:
      - On a single line, the amount of concrete used each day, separated by comma and space
      - On a second line, the final cost of the wall. One cubic yard of concrete costs 1900 pesos.
    
      Constraints
      - The wall may contain up to 2000 sections (2000 elements in the initial array)
      - Starting height for each section is within range [0…30]
    */

    const initialHeights = arr.map(Number);
    const concretePerDay = 195; // in sqr yards
    const cuYdConcretePrice = 1900; // in pesos
    let usedConcrete = []
    let sectionsToFinish = initialHeights.filter(num => num < 30);
    let workingCrew = sectionsToFinish.length;
  
    while (workingCrew > 0) {
      usedConcrete.push(concretePerDay * workingCrew)
      sectionsToFinish = sectionsToFinish.filter(num => num < 30);
  
      for (let i = 0; i < sectionsToFinish.length; i++) {
        sectionsToFinish[i]++
        if (sectionsToFinish[i] >= 30) { workingCrew--; }
      }
      if (workingCrew.length <= 0) { break; }
    }
  
    const totalPrice = usedConcrete.reduce((a, b) => a + b) * cuYdConcretePrice;
  
    return (`${usedConcrete.join(', ')}` + '\n' +
      `${totalPrice} pesos`)
  
}
