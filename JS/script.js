characterAmount = 0;
var generateBtn = document.querySelector("#generate");
function generatePassword(characterAmount) {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "1234567890";
  var specialcharacters = "!@#$%^&*";
  
  var characterNumber = parseInt(characterAmount);
  var requestsUpper = confirm("Do you want uppercase letters?");
  var requestsLower = confirm("Do you want lowercase letters?");
  var requestsNumeric = confirm("Do you want numbers");
  var requestsSpecial = confirm("Do you want special characters?");
  var finalPass = "";
  var emptyString = "";
  if (requestsUpper) {
    finalPass += uppercase;
  }
  if (requestsLower) {
    finalPass += lowercase
  }
  if (requestsNumeric) {
    finalPass += numeric
  }
  if (requestsSpecial) {
    finalPass += specialcharacters
  }
  for (var i=0; i < characterNumber; i++) {
    emptyString += finalPass.charAt(Math.floor(Math.random() * finalPass.length)) 
  }
  return emptyString;
}
function writePassword(characterAmount) {
  var generatedPassword = generatePassword(characterAmount)
  var passwordText = document.querySelector("#password");
  passwordText.textContent = generatedPassword;
}
function characterVerify() {
  var characterAmount = prompt("How many characters do you want your password to contain?");
    if (characterAmount < 8 || characterAmount > 128){
      alert("Character amount does not meet the specified criteria 8-128")
  } else {
    writePassword(characterAmount);
  }
  
}
generateBtn.addEventListener("click", characterVerify);

