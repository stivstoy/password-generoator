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



validateCharacters(passwordNumber);

function passwordNumberFunction() {
  passwordNumber = prompt("Please enter the number of characters you would line in your passord between 8-128");
  validateCharacters(passwordNumber);
}

function uppercaseFunction() {

  while (true) {
    uppercase = prompt("would you like uppercase letters in your password Y/N");

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
    //validateCharacters(passwordNumber);
 

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
      console.log(numbers);
      numbers ='';
      break;
    }

    else {
      window.alert("Please make a valid entry. Use a captital Y or N")
    }
  }
}

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

function additionalQuestions() {
  uppercaseFunction();
  lowercaseFunction();
  numericFunction();
  specialFunction();
}



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

  console.log(result);
  return result;
}




function generatePassword(lowercase, uppercase, passwordNumber, numeric, special) {
  var passwordLength = passwordNumber;
  var lowerConfirm = lowercase;
  var upperConfirm = uppercase;
  var numericConfirm = numeric;
  var specialConfirm = special;
  //alphaLower = alphaLower.charAt(Math.floor(Math.random() * alphaLower.length));
  // alphaUpper = alphaUpper.charAt(Math.floor(Math.random() * alphaUpper.length));
  //specialC
  //specialC.charAt(Math.floor(Math.random() * specialC.length));
  //numbers = numbers.charAt(Math.floor(Math.random() * numbers.length));
  //passwordChoices = alphaLower + alphaUpper+ numbers+ specialC;
  // let generatedPassword ='';

  // const charactersLength = passwordChoices.length;
  //  for ( let i = 0; i < length; i++ ) {
  //     generatedPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
  // }

  // return generatedPassword;

  generatedPassword = generateString(passwordNumber);


  // for (var i = 0; i < passwordChoices.length; i++) {
  // if(lowerConfirm === 'Yes' && upperConfirm === 'Yes' && numericConfirm === 'Yes' && specialConfirm === 'Yes'){
  // generatedPassword = specialC[Math.floor(Math.random() * specialC.length)];
  //alphaLower.charAt(Math.floor(Math.random() * n));
  //}
  // return window.alert(passwordChoices);

  //window.alert(passwordLength+", "+lowerConfirm+", "+ upperConfirm+", "+ numericConfirm+ ", "+ specialConfirm);
  //window.alert(alphaLower +", "+alphaUpper);
}




function validateCharacters(passwordNumber) {

  if (isNaN(passwordNumber) || passwordNumber < 1 || passwordNumber > 3) {
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

// WHEN all prompts are answered
// a password is generated that matches the selecteddd criteria


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