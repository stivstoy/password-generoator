// Assignment code here


// I click the button to generate a password
// I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
// I select which criteria to include in the password

// WHEN prompted for the length of the password
//  I choose a length of at least 8 characters and no more than 128 characters


// WHEN asked for character types to include in the password
//  I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//var lowercase = prompt("Would you like lowercase letters in your password? YES or NO");
//var uppercase = prompt("Would you like uppercase letters in your password? YES or NO");
//var numeric = prompt("Would you like numbers in your password? YES or NO");
//var specialCharacters = prompt("Would you like special characters in your password? YES or NO");

// WHEN I answer each prompt
//  my input should be validated and at least one character type should be selected
//validate that at least one is a yes

var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialC = "!@#$%^&*_-+=";
var passwordNumber = prompt("Please enter the number of characters you would line in your passord between 8-128");
var lowercase; // prompt ("would you like lowercase letters in your password yes or no?");
var uppercase; // prompt ("would you like uppercase letters in your password yes or no?");
var numeric; //prompt ("Would you like numbers in your password");
var special; //  prompt ("Would you like special characters in your password");
var generatedPassword;
validateCharacters(passwordNumber);

function passwordNumberFunction() {
  passwordNumber = prompt("Please enter the number of characters you would line in your passord between 8-128");
  validateCharacters(passwordNumber);
}

function uppercaseFunction() {
  uppercase = prompt ("would you like uppercase letters in your password yes or no?");
  //validateCharacters(passwordNumber);
}

function lowercaseFunction() {
  lowercase = prompt ("would you like lowercase letters in your password yes or no?");
  //validateCharacters(passwordNumber);
}

function numericFunction() {
  numeric = prompt("would you like numbers in your password yes or no?");
 // validateCharacters(passwordNumber);
}

function specialFunction() {
  special= prompt("would you like special characters in your password yes or no?");
 // validateCharacters(passwordNumber);
}

function additionalQuestions(){
  uppercaseFunction();
  lowercaseFunction();
  numericFunction();
  specialFunction();
}

function generatePassword(lowercase, uppercase, passwordNumber, numeric, special) {
  var passwordLength = passwordNumber;
  var lowerConfirm = lowercase;
  var upperConfirm = uppercase;
  var numericConfirm = numeric;
  var specialConfirm = special;
  window.alert(passwordLength+", "+lowerConfirm+", "+ upperConfirm+", "+ numericConfirm+ ", "+ specialConfirm);

}

function validateCharacters(passwordNumber) {

  if (isNaN(passwordNumber) || passwordNumber < 8 || passwordNumber > 128) {
    // confirm user entered a number
    window.alert("You did not enter a number between 8 - 128");
    passwordNumberFunction();
  }


else {
  additionalQuestions();
  generatePassword(lowercase, uppercase, passwordNumber, numeric, special);
  }

}
  console.log (lowercase);
  console.log (uppercase);
  console.log(passwordNumber);
  console.log(numeric);
  console.log(special);

// WHEN all prompts are answered
// a password is generated that matches the selected criteria


// WHEN the password is generated
//  the password is either displayed in an alert or written to the page

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");

 // passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
//passwordNumberFunction();
