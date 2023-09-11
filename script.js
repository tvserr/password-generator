// character options to pick from for generating a random password
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "?", "/"];

// generate password button in html file
var generateBtn = document.querySelector("#generate");

// will store characters from user's preference
var userChoices = [];

// series of prompts for user to dictate their preference for a random password
function generatePassword() {
  var charLength = parseInt(
    window.prompt("How many characters do you want for your password?")
  );
  while (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    window.alert("Please provide a value from 8 to 128.");
    charLength = parseInt(
      window.prompt("How many characters do you want for your password?")
    );
  }

  var uppercaseAns = window.confirm(
    "Do you want to include uppercase letters in your password?"
  );
  if (uppercaseAns) {
    userChoices = userChoices.concat(uppercase);
  }
  var lowercaseAns = window.confirm(
    "Do you want to include lowercase letters in your password?"
  );
  if (lowercaseAns) {
    userChoices = userChoices.concat(lowercase);
  }
  var numericAns = window.confirm(
    "Do you want to include numbers in your password?"
  );
  if (numericAns) {
    userChoices = userChoices.concat(numeric);
  }
  var specialCharAns = window.confirm(
    "Do you want to include special characters in your password?"
  );
  if (specialCharAns) {
    userChoices = userChoices.concat(specialChar);
  }
  var password = "";
  for (var i = 0; i < charLength; i++) {
    var index = Math.floor(Math.random() * userChoices.length);
    password += userChoices[index];
  }
  return password;
}

// inputs generated password into html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

writePassword();

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
