function leapYear(year) {
    const isLeap = new Date(year, 1, 29).getDate() === 29;
    console.log(isLeap ? "yes" : "no" )
}