// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '"', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


function getPrompt() {
  var charLength = prompt("Enter a character length between 8-128");
  console.log(charLength);

  if (isNaN(charLength) === true) {
    alert("Numbers only!")
    return;
  };

  if (charLength < 8) {
    alert("password min is 8");
    return;
  };

  if (charLength > 128) {
    alert("max length is 128");
    return;
  };

  var hasSpecCar = confirm("would you like special characters?");
  var hasNums = confirm("would you like numbers?");
  var hasUp = confirm("would you like uppercase characters");
  var hasLow = confirm("would you like lower case characters");

  if (hasSpecCar === false &&
    hasNums === false &&
    hasUp === false &&
    hasLow === false) {
    alert("must pick one!");
    return;
  };

  var passOptions = {
    hasSpecCar: hasSpecCar,
    charLength: charLength,
    hasUp: hasUp,
    hasLow: hasLow,
    hasNums: hasNums
  };

  console.log(passOptions)
  return passOptions;
};

function getRanNum(arr) {
  var indexofArray = Math.floor(Math.random() * arr.length);
  var randEl = arr[indexofArray];
  return randEl;
};


function generatePassword() {
  var options = getPrompt();
  var result = [];
  var possibleChars = [];

  console.log(options)

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  if (options.hasSpecCar === true) {
    possibleChars.push(specialChar)
  }


  //  Conditional statement that adds array of numeric characters into array of possible characters based on user input
  if (options.hasNums === true) {
    possibleChars.push(nums)
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input

if (options.hasLow === true) {
possibleChars.push(lowerCase)
  }
  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
if(options.hasUp === true) {
  possibleChars.push(upperCase)
}
  // log possibleChars, get familiar with it
  console.log(possibleChars)

  // make a for loop that runs as many times as the user entered as their password length
  for(i = 0; i < options.charLength; i++){
    var ranArr = possibleChars[Math.floor(Math.random() * possibleChars.length)]
    var ranChar = ranArr[Math.floor(Math.random() *  ranArr.length)]    
    //   pick a random character from possibleChars and push it into the result array
    result.push(ranChar)
  }
  // console.log result

  return result.join("");

}

generateBtn.addEventListener("click", writePassword);
