// character options to pick from for generating a random password
var charLength = [];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "?", "/"];
// var allChar = [uppercase.concat(lowercase, numeric, specialChar)];

// Assignment Code
var generateBtn = document.querySelector("#generate");

var userChoices = [];

// Write password to the #password input
function generatePassword() {
  var charLength = parseInt(window.prompt("How many characters do you want for your password?"));
  while (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    window.alert("Please provide a value from 8 to 128.");
    charLength = parseInt(window.prompt("How many characters do you want for your password?"));
  }

  var uppercaseAns = window.confirm("Do you want to include uppercase letters in your password?");
  if (uppercaseAns) {
    userChoices = userChoices.concat(uppercase);
  }
  var lowercaseAns =  window.confirm("Do you want to include lowercase letters in your password?");
  if (lowercaseAns) {
    userChoices = userChoices.concat(lowercase);
  }
  var numericAns = window.confirm("Do you want to include numbers in your password?");
  if (numericAns) {
    userChoices = userChoices.concat(numeric);
  }
  var specialCharAns = window.confirm("Do you want to include special characters in your password?");
  if (specialCharAns) {
    userChoices = userChoices.concat(specialChar);
  }
}

// var userChoices = [];
//   uppercaseAns: uppercase;
//   lowercaseAns: lowercase;
//   numericAns: numeric;
//   specialCharAns: specialChar;



// var index = Math.floor(Math.random() * charLength.length);
// var userChoices = options[index];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);