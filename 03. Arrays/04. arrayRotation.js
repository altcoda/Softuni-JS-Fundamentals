function arrayRotation(arr, num) {

    let newArr = [...arr];

    for (let rotation = 0; rotation < num; rotation++) {

        let element = newArr.shift()
        newArr.push(element)
    }

    console.log(newArr.join(" "))

}
