// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}

//
//add 'if statments' 

//  pwChoice1 = alert("Would you like to include Scecial characters in your password?")

//  pwChoice2 = alert("Would you like to include uppercase characters in your password?")

// pwChoice3 = alert("Would you like to include numbers in your password ?")

// pwChoice4 = alert("Would you like to include lowercase characters in your password?")

 

var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '"', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']



charLength = prompt("Enter a character length between 8-128")
var randLc = lowerCase[Math.floor(Math.random() * lowerCase.length)];
var randSc = specialChar[Math.floor(Math.random() * specialChar.length)];
var randUc = upperCase[Math.floor(Math.random() * upperCase.length)];
var randNum = nums[Math.floor(Math.random() * nums.length)]; 
var passWd = randLc + randSc + randUc + randNum

 alert("Your new password is: " + passWd)
  









// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
