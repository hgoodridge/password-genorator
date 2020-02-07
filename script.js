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



// pool.specialChar[x]
// pool.lowerCase[x]
// pool.upperCase[x]
// pool.nums[x]
var charLength = prompt("Enter a character length between 8-128");

function getPrompt(){
console.log(charLength);

if(isNaN(charLength) === true){
  alert("Numbers only!")
};
if(charLength < 8){
alert("password min is 8");
return;
};

if(charLength > 128){
alert("max length is 128");
return;
};

var hasSpecCar = confirm("would you like special characters?");
var hasNums = confirm("would you like numbers?");
var hasUp = confirm("would you like uppercase characters");
var hasLow = confirm("would you like lower case characters");

if(hasSpecCar === false && 
  hasNums === false &&
  hasUp === false &&
  hasLow === false){
  alert("must pick one!");
};

var passOptions = {
  hasSpecCar: hasSpecCar,
  charLength:charLength,
  hasUp:hasUp,
  hasLow:hasLow,
  hasNums:hasNums
};
return passOptions;
};
var pwd = " "
function getUp() {
  for (var i = 0; i < charLength; i++) {

    var x = Math.floor(Math.random() * upperCase.length);
    pwd += upperCase[x]
    console

  }
}
getUp();








// // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);
