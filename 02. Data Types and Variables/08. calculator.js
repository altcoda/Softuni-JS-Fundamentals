function calculator(n1, operator, n2) {
    if (operator === '+') {
        console.log((n1 + n2).toFixed(2));
    }
    else if (operator === '-') {
        console.log((n1 - n2).toFixed(2));
    }
    else if (operator === '*') {
        console.log((n1 * n2).toFixed(2));
    }
    else if (operator === '/') {
        console.log((n1 / n2).toFixed(2));
    }
}