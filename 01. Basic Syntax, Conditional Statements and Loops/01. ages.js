function ages(age) {

    let lifeStage = "";
    if(age >= 0 && age <=2) {
        lifeStage = "baby";
    } else if(age > 2 && age <= 13) {
        lifeStage = "child";
    } else if(age > 13 && age <=19) {
        lifeStage = "teenager";
    } else if(age > 19 && age <= 65) {
        lifeStage = "adult";
    } else if(age > 65) {
        lifeStage = "elder";
    } else {
        lifeStage = "out of bounds";
    }
    console.log(lifeStage)
    
}