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

var emptyPassword =""

var lowercase ="abcdefghijklmnopqrstuvwxyz"

//var lowercase = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z")

// var lowercasepw = lowercase.split('')

// console.log(lowercase)

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// var uppercasePw = uppercase.split("")

// console.log(uppercase)

var numbers = "0123456789"

// var numbersPw = numbers.split("")

// console.log(numbers)

var symbols = ("~`! @#$%^&*()_-+={[}]|;'<,>.?/") 

// var symbolsPw = symbols.split("")

// console.log(symbols)


//TODO: Set up series of prompts or alerts that confirms for numbers, upper or lower
//case characters or special characters that the user decides, use conditional statements
// to make sure at least one statement is chosen

function generatePassword() {
var numChar = prompt ("How long would you like your password to be? (Between 8 and 128 characters)");

// console.log(numChar)

//Checks to make sure user chooses valid password length
  if (parseInt(numChar) >= 8 && parseInt(numChar) <= 128) {


      var yesLower = confirm ("Would you like lowercase characters?");
        if (yesLower) {
          // emptyPassword = emptyPassword.concat(lowercase)
          randomLower = Math.floor(Math.random() * lowercase.length);
          console.log(lowercase.charAt(randomLower));
        }
        
        var yesUpper = confirm ("Would you like UPPERCASE characters?");
        if (yesUpper) {
          // emptyPassword = emptyPassword.concat(uppercase)
          randomUpper = Math.floor(Math.random() * uppercase.length);
          console.log(uppercase.charAt(randomUpper));
        }
        
        var yesSymbols = confirm ("Would you like special characters?");
        if (yesSymbols) {
          // emptyPassword = emptyPassword.concat(symbols) 
          randomSymbols = Math.floor(Math.random() * symbols.length);
          console.log(symbols.charAt(randomSymbols));
        }
        
      } else alert("Invalid number of characters, or invalid selection refresh page to try again!")
    
//TODO: Take the confirms and combine into holder and randomize using using Math.floor, and Math.random

// console.log(emptyPassword)

  for (let i = 0; i < parseInt(numChar); i++) {
    // var randomNum = Math.floor(Math.random() * emptyPassword.length)

    var userPassword = passwordStorage
    
  }

return userPassword
  }
// var choices = lowercase.concat

// if (yesLower) {
//   emptyPassword.concat(lowercase)
// }

// if (yesUpper) {
//   emptyPassword.concat(uppercase)
// }

// if (yesSymbols) {
//   emptyPassword.concat(symbols)
// }
// console.log(lowercase)






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

