function convertToJSON(name, lastName, hairColor) {

    let person = {
        "name" : name,
        "lastName" : lastName,
        "hairColor" : hairColor
    }
    
    let string = JSON.stringify(person);
    
    return string
}
