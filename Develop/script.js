// Assignment code here
var passwordLength = "";
var specialCharacters;
var numberCharacters;
var upperCase;
var lowerCase;

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!","@","$","%","%","^","&","*" ];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword(){
  var passwordLength=(prompt("How many characters do you want your password to include?"));
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


