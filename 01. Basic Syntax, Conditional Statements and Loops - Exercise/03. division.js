function division(num) {
    
    let divisors = [10,7,6,3,2];
    let divisible = false;
    for(let i = 0; i <= divisors.length; i++) {
        if ((num % divisors[i]) == 0) {
       divisible = true;
         console.log(`The number is divisible by ${divisors[i]}`)
       break;
     }
    }
    if(divisible === false) { console.log(`Not divisible`) }
    
}