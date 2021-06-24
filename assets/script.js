// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// TODO: WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// Create variables to determine what criteria the password will contain

var lowercase = ("abcdefghijklmnopqrstuvwxyz")

var lowercasePw = lowercase.split("")

console.log(lowercasePw)

var uppercase = ("ABCDEFGHIJKLMNOPQRSTUV")

var uppercasePw = uppercase.split("")

console.log(uppercasePw)

var numbers = ("0123456789")

var numbersPw = numbers.split("")

console.log(numbersPw)

var symbols = ("~`! @#$%^&*()_-+={[}]|;'<,>.?/") 

var symbolsPw = symbols.split("")

console.log(symbolsPw)


//TODO: Set up series of prompts or alerts that confirms for numbers, upper or lower
//case characters or special characters that the user decides, use conditional statements
// to make sure at leaxt one statement is chosen


//TODO: Take the confirms and combine into holder and randomize using using math.Floor, and math.Random

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

