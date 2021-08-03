// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  const passwordFinal = "";
  const passwordString = "";

  const promptNum = prompt("Enter the correct password length");
  const passwordLength = parseInt(promptNum);


// makes sure pw is within passable range
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Please use numbers between 8 and 128")
    return;
  }

  if(confirm("Does it have lower case letters?")) {
    const str2 = "abcdefghijklmnopqrstuvwxyz";
    passwordString = passwordString.concat(str2);
  }
  if(confirm("Does it have upper case letters?")) {
    const str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    passwordString = passwordString.concat(str2);
  }
  if(confirm("Does it require a number?")) {
    var str2 = "0123456789";
    passwordString = passwordString.concat(str2);
  }
  if(confirm("Does it require some special characters?")) {
    var str2 = "!@#$%^&*?";
    passwordString = passwordString.concat(str2);
  }

  if(passwordString !== "") {
    alert("Thank you! Generating now.");
  }
 else{
   alert("Please choose at least one character");
  return
  }
  charset = passwordString;
  for (var i = 0, n = charset.length; i < passwordLength; i++) {
    passwordFinal += charset.charAt(Math.floor(Math.random() * n));
  }
return passwordFinal;
}



function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
