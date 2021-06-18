// Note: Softuni system doesn't accept separate functions but I think it's better this way

function getFactorial(num) {
    let factorial = num;
  
    for(let i = num - 1; i > 0; i--) {
      factorial *= i;
    }
  
    return factorial;
}

function factorialDivision(n1, n2) {
    
    let factorial_n1 = getFactorial(n1);
    let factorial_n2 = getFactorial(n2);
    
    return (factorial_n1 / factorial_n2).toFixed(2)
}
