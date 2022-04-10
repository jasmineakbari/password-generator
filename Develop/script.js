// Set Applicable Special Characters for random generator
const specialCharacters = "!@#$%&*/\|";
const generateButton = document.getElementById('generateBtn')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment code here
var generatePassword = function() {
  window.alert("Please set your password parameters.");
  // Prompts to record pw parameters starting with Number of Characters in Password
  var passwordLength = window.prompt("Choose how many characters long you would like your password, it can be between 8 and 128 total characters long.");
  console.log(passwordLength);
  // Confirm length is valid or ask again
  if (passwordLength <= 7 || passwordLength >= 129) {
    window.alert("That is not a valid password length, please try again.");
    window.prompt("Choose how many characters long you would like your password, it can be between 8 and 128 total characters long.");
  }

  // LowerCase
  var lowerCase = confirm("Do you want Lowercase letters in your password?");
  console.log(lowerCase);

  // Uppercase
  var upperCase = confirm("Do you want Uppercase letters in your password?");
  console.log(upperCase);

  // Numeric values
  var number = confirm("Do you want Numbers in your password?");
  console.log(number);

  // Special Characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" pick 10
  var special = confirm("Do you want Special Characters in your password?");
  console.log(special);

  // Running count for Parameters
  var minimumCount = 0;

  // Set empty minimums for parameters to start
  var minimumLowerCase = [];
  var minimumUpperCase = [];
  var minimumNumber = [];
  var minimumSpecialCharacter = [];

  // Parameter Array functions using CharCode
  var parametersArray = {
    getLowerCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getNumber: function() {
      return String.fromCharCode(Math.floor(Math.random() *10 + 48));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };

  //Rerun Password parameters if atleast one parameter is not selected
  if(lowerCase === false && upperCase === false && number === false && special === false) {
    window.alert("You must select at least One Password Parameter: \n1. Lowercase\n2. Uppercase\n3. Number\n4. Special Character")
    generateButton();
  }

  //Random Password Variable and Loop
  var randomPasswordGenerated = [];

  while ((parseInt(passwordLength) > minimumCount)) {
    console.log(minimumCount)
    // If statements for when parameters are true
    if (lowerCase === true && minimumCount < passwordLength) {
      let getLowerChar = parametersArray.getLowerCase();
      minimumLowerCase.push(getLowerChar)
      minimumCount++;
    }
    if (upperCase === true && minimumCount < passwordLength) {
      let getUpperChar = parametersArray.getUpperCase();
      minimumUpperCase.push(getUpperChar)
      minimumCount++;
    }
    if (number === true && minimumCount < passwordLength) {
      let getNumber = parametersArray.getNumber();
      minimumNumber.push(getNumber);
      minimumCount++;
    }
    if (special === true && minimumCount < passwordLength) {
      let getSpecialChar = parametersArray.getSpecialCharacters();
      minimumSpecialCharacter.push(getSpecialChar)
      minimumCount++;
    }
  }
  console.log("length of final result", minimumLowerCase.length + minimumUpperCase.length +
    minimumNumber.length + minimumSpecialCharacter.length)
  randomPasswordGenerated.push(minimumLowerCase.join(''));
  randomPasswordGenerated.push(minimumUpperCase.join(''));
  randomPasswordGenerated.push(minimumNumber.join(''));
  randomPasswordGenerated.push(minimumSpecialCharacter.join(''));
  console.log(randomPasswordGenerated)

  // Show Random Password Generated in #password
  var displayPassword = document.querySelector("#password");
  displayPassword.append(randomPasswordGenerated.join(''));

  return randomPasswordGenerated;
}