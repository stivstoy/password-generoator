// Assignment code here

// start passwordFuncton
function passwordFunction() {

// declare global variables
var alphaUpper;
var alphaLower;
var numbers;
var specialC;
var passwordNumber = prompt("Please enter the number of characters you would liKe in your passord between 8-128");
var lowercase; // prompt ("would you like lowercase letters in your password yes or no?");
var uppercase; // prompt ("would you like uppercase letters in your password yes or no?");
var numeric; //prompt ("Would you like numbers in your password");
var special; //  prompt ("Would you like special characters in your password");
var generatedPassword;
var passwordChoices;

// console log for testing
console.log(alphaUpper);
console.log(alphaLower);
console.log(numbers);
console.log(specialC);
//console.log passwordNumber = prompt("Please enter the number of characters you would line in your passord between 8-128");
console.log(lowercase); // prompt ("would you like lowercase letters in your password yes or no?");
console.log(uppercase); // prompt ("would you like uppercase letters in your password yes or no?");
console.log(numeric); //prompt ("Would you like numbers in your password");
console.log(special); //  prompt ("Would you like special characters in your password");
console.log(generatedPassword);
console.log(passwordChoices);


// validate that the number is between 8 and 128
validateCharacters(passwordNumber);

// functions for number value
function passwordNumberFunction() {
  passwordNumber = prompt("Please enter the number of characters you would line in your passord between 8-128");
  validateCharacters(passwordNumber);
}

// functions for uppercase value
function uppercaseFunction() {

  while (true) {
    uppercase = prompt("would you like uppercase letters in your password Enter Y or N");
    console.log(uppercase);

    if (uppercase ==="Y") {
      alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(alphaUpper);
      break;
    }

    else if (uppercase === "N") {
      alphaUpper = '';
      console.log(alphaUpper);
      break;
    }

    else {
      window.alert("Please make a valid entry. Use a captital Y or N")
    }
    }
  }

//function for lowercase value
function lowercaseFunction() {
  while (true) {
    lowercase = prompt("would you like lowercase letters in your password Y/N");

    console.log(lowercase);

    if (lowercase ==="Y") {

      alphaLower = "abcdefghijklmnopqrstuvwxyz";
      console.log(alphaLower);
      break;
    }

   else if (lowercase === "N") {
      alphaLower ='';
      console.log(alphaLower);
      break;
    }

    else {
      window.alert("Please make a valid entry. Use a captital Y or N")
    }
  }
}

//function for numeric value
function numericFunction() {
  while (true) {
    numeric = prompt("would you like numbers in your password Y/N");
    console.log(numeric);

    if (numeric ==="Y") {
      numbers = "0123456789";
      console.log(numbers);
      break;
    }

    else if (numeric === "N") {
      numbers ='';
      console.log(numbers);
      break;
    }

    else {
      window.alert("Please make a valid entry. Use a captital Y or N")
    }
  }
}

// functions for special characters

function specialFunction() {
  while (true) {
   special = prompt("would you like special characters in your password Y/N");

    console.log (special);

    if (special ==="Y") {
      specialC =  "!@#$%^&*_-+=";
      console.log(specialC);
      break;
    }

    else if (special === "N") {
      specialC = '';
      console.log(specialC);
      break;
    }

    else {
      window.alert("Please make a valid entry. Use a captital Y or N")
    }
  }
}

// Function to validate one of the prompts to be yes
function validatePrompts () {
  if (uppercase === "N" &&  lowercase === "N" &&  numeric === "N" && special === "N");
  window.alert ("You must select yes to one of the prompts");
  additionalQuestions();
}

// run validate prompts
validatePrompts();

// Function to run all the functions
function additionalQuestions() {
  uppercaseFunction();
  lowercaseFunction();
  numericFunction();
  specialFunction();
}

// This is where I needed help to generate result
function generateString(passwordNumber) {
  let result = ' ';
  passwordChoices = alphaLower + alphaUpper + numbers + specialC;
  const charactersLength = passwordChoices.length;
  for (let i = 0; i < passwordNumber; i++) {
   /*  chooose random 1-4 
    switch (random) { 
      case 0: {
       result += alphaLower .charAt(Math.floor(Math.random() * 26); if then yes or no
      }
      case 1 () {
        Math.floor(Math.random()
      }
      case 2 () {
      }
      case 3 () {
      }
    
    } */


  result += passwordChoices.charAt(Math.floor(Math.random() * charactersLength));
  }
  // change result to value to be passed
  password = result;


  console.log(result);
  return result;
}



function generatePassword(lowercase, uppercase, passwordNumber, numeric, special) {
  var passwordLength = passwordNumber;
  var lowerConfirm = lowercase;
  var upperConfirm = uppercase;
  var numericConfirm = numeric;
  var specialConfirm = special;
  generatedPassword = generateString(passwordNumber);
}

//  passwordNumber function
function validateCharacters(passwordNumber) {

  if (isNaN(passwordNumber) || passwordNumber < 8 || passwordNumber > 128) {
    // confirm user entered a number
    window.alert("You did not enter a number between 8 - 128");
    passwordNumberFunction();
  }

  else {
    additionalQuestions();
    //generatePassword(lowercase, uppercase, passwordNumber, numeric, special);
    generateString(passwordNumber);
  }

}
console.log(lowercase);
console.log(uppercase);
console.log(passwordNumber);
console.log(numeric);
console.log(special);
// console.log(generatedPassword);
console.log(passwordChoices);
console.log(generateString(passwordNumber, passwordChoices));


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var password = result;
 var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", passwordFunction);

// alert the user of password
window.alert ("Your password is " + password);

}

