// Write password to the #password input
function writePassword() {
  var password = generateButton();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Assignment code here
var generateButton = function() {
  window.alert("Please set your password parameters.");
  // Prompts to record pw parameters starting with Number of Characters in Password
  var passwordLength = window.prompt("Choose how many characters long you would like your password, it can be between 8 and 128 total characters long.");
  console.log(passwordLength);
  if (passwordLength <= 7 || passwordLength >= 129) {
    window.alert("That is not a valid password length, please try again.");
    window.prompt("Choose how many characters long you would like your password, it can be between 8 and 128 total characters long.");;
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

  



  //Rerun Password parameters if atleast one parameter is not selected
  if(lowerCase === false && upperCase === false && number === false && special === false) {
    window.alert("You must select at least One Password Parameter: \n1. Lowercase\n2. Uppercase\n3. Number\n4. Special Character")
    generateButton();
  }


  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}