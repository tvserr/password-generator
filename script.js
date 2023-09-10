// character options to pick from in generating random password
var charLength = [];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "?", "/"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

var finalPassword = [];

// Write password to the #password input
function generatePassword() {
  window.prompt("How many characters do you want for your password?");
  // if (charLength < 8 || charLength > 128) {
  //   window.alert("Please provide a value from 8 to 128.");
  // } return generatePassword();

  if window.confirm("Do you want to include uppercase letters in your password?");

  function finalPassword() {
    finalPassword = finalPassword.concat(uppercase);
    
  if window.confirm("Do you want to include lowercase letters in your password?");
    finalPassword = finalPassword.concat(lowercase);
    
  if window.confirm("Do you want to include numbers in your password?");
    finalPassword = finalPassword.concat(numeric);
    
  if window.confirm("Do you want to include special characters in your password?");
  finalPassword = finalPassword.concat(specialChar);
  }
}

finalPassword();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

