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

//creating an empty string to store password strings!

var passwordStorage =""

var lowercase ="abcdefghijklmnopqrstuvwxyz"

// console.log(lowercase)

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// console.log(uppercase)

var numbers = "0123456789"


// console.log(numbers)

var symbols = ("~` !@#$%^&*()_-+={[}]|;'<,>.?/") 


// console.log(symbols)

// function used to generate password given user inputs on the confirms and on answer to the prompt!
function generatePassword() {
var numChar = prompt ("How long would you like your password to be? (Between 8 and 128 characters)");

// console.log(numChar)

//Checks to make sure user chooses valid password length
  if (parseInt(numChar) >= 8 && parseInt(numChar) <= 128) {


      var yesLower = confirm ("Would you like lowercase characters?");
        if (yesLower) {
          passwordStorage = passwordStorage.concat(lowercase)
          // randomLower = Math.floor(Math.random() * lowercase.length);
          // console.log(lowercase.charAt(randomLower));
        }
        
        var yesUpper = confirm ("Would you like UPPERCASE characters?");
        if (yesUpper) {
          passwordStorage = passwordStorage.concat(uppercase)
          // randomUpper = Math.floor(Math.random() * uppercase.length);
          // console.log(uppercase.charAt(randomUpper));
        }
        
        var yesSymbols = confirm ("Would you like special characters?");
        if (yesSymbols) {
         passwordStorage = passwordStorage.concat(symbols) 
          // randomSymbols = Math.floor(Math.random() * symbols.length);
          // console.log(symbols.charAt(randomSymbols));
        }

        var yesNumbers = confirm ("Would you like numbers?");
        if (yesNumbers) {
          passwordStorage = passwordStorage.concat(numbers)
        }
        
      } else alert("Invalid number of characters, or invalid selection refresh page to try again!")
    
// console.log(passwordStorage);

//Take the confirms and combine into holder and randomize using using Math.floor, and Math.random,
//grabs random choices in user password array

  var userPassword = []
  for (let i = 0; i < parseInt(numChar); i++) {
    var randomNum = Math.floor(Math.random() * passwordStorage.length)

    userPassword.push(passwordStorage.charAt(randomNum))
    
  }

//Turns the array into a string

return userPassword.join('')
}

