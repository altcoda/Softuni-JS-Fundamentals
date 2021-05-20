function login(input) {
  let username = input[0];
  let password = username.split("").reverse("").join("");
  
  let inp = "", index = 1, loginAttempts = 0;
  while(inp != password) {
    let inp = input[index++];
    loginAttempts++;
    if(inp === password) { 
        console.log(`User ${username} logged in.`); break;
    } else if(loginAttempts === 4) { 
        console.log(`User ${username} blocked!`); break; 
    } else {
        console.log(`Incorrect password. Try again.`) 
    }
  }
}