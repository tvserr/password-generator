// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var characters = ["abcdefghijklmnopqrstuvwxyz0123456789"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var password = window.prompt("What is the length of your password? Choose from 8 to 128 characters.");

  var index = Math.floor(Math.random() * characters.length);
  var password = characters[index];


}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
