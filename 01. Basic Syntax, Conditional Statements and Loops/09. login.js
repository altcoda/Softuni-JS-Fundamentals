function login(list) {
  let username = list.shift();
  let password = username.split("").reverse("").join("");

  let input = "", index = 0, loginAttempts = 0;
  while(input != password) {
    let input = list[index++];

    loginAttempts++;

    if(input === password) {
        console.log(`User ${username} logged in.`); break;
    } else if(loginAttempts === 4) {
        console.log(`User ${username} blocked!`); break; 
    } else {
        console.log(`Incorrect password. Try again.`) 
    } 
  }
}