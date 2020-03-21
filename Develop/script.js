var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "1234567890";
  var specialcharacters = "!@#$%^&*";

  var characterAmount = prompt("How many characters do you want your password to contain?");
    
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
function writePassword() {
  var generatedPassword = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
}
generateBtn.addEventListener("click", writePassword);
 
