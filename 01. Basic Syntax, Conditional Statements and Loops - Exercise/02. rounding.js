function rounding(num, fixedAt) {
    let rounded = (fixedAt > 15) ? num.toFixed(15) : num.toFixed(fixedAt);
    console.log(parseFloat(rounded))
}  