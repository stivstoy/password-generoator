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
  var passwordChoices;
  var password;

  // functions for number value
  function passwordNumberFunction() {
    passwordNumber = prompt("Please enter the number of characters you would line in your passord between 8-128");
    validateCharacters(passwordNumber);
  }

  // validate that the number is between 8 and 128
  validateCharacters(passwordNumber);

  //  passwordNumber validate function
  function validateCharacters(passwordNumber) {

    if (isNaN(passwordNumber) || passwordNumber < 8 || passwordNumber > 128) {
      // confirm user entered a number
      window.alert("You did not enter a number between 8 - 128");
      passwordNumberFunction();
    }

    else {
      additionalQuestions();
      generatePassword(passwordNumber);
    }

  }

  // Function to run all the functions
  function additionalQuestions() {
    uppercaseFunction();
    lowercaseFunction();
    numericFunction();
    specialFunction();
  }

  // functions for uppercase value
  function uppercaseFunction() {

    while (true) {
      uppercase = prompt("would you like uppercase letters in your password Enter Y or N");
      console.log(uppercase);

      if (uppercase === "Y") {
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

      if (lowercase === "Y") {

        alphaLower = "abcdefghijklmnopqrstuvwxyz";
        console.log(alphaLower);
        break;
      }

      else if (lowercase === "N") {
        alphaLower = '';
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

      if (numeric === "Y") {
        numbers = "0123456789";
        console.log(numbers);
        break;
      }

      else if (numeric === "N") {
        numbers = '';
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

      console.log(special);

      if (special === "Y") {
        specialC = "!@#$%^&*_-+=";
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
  function validatePrompts() {
    if (uppercase === "N" && lowercase === "N" && numeric === "N" && special === "N") {
      window.alert("You must select yes to one of the prompts");
      additionalQuestions();
    }


  }
  // run validate prompts
  validatePrompts();

  // Generate Password
  function generatePassword(passwordNumber) {
    var password = '';
    passwordChoices = alphaLower + alphaUpper + numbers + specialC;
    var charactersLength = passwordChoices.length;

    for (var i = 0; i < passwordNumber; i++) {
      password += passwordChoices.charAt(Math.floor(Math.random() * charactersLength));
      document.getElementById("password").innerHTML = 'password is ' + password;

    }

    validatePassword(password); 

  }
  function validatePassword(password) {
    var lower = new RegExp("(?=.*[a-z])");
    var upper = new RegExp("(?=.*[A-Z])"); 
    var number = new RegExp("(?=.*\\d)");
    var specialChar = new RegExp("(?=.*[-+_!@#$%^&*., ?])");
    
    if ((lowercase === "Y" && !(lower.test(password))) || (numeric === "Y" && !(number.test(password))) || (uppercase === "Y" && !(upper.test(password))) || (special === "Y" && !(specialChar.test(password)))) 
    {

      generatePassword(passwordNumber);

    }
  }

}

