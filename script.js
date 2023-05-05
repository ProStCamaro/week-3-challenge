// Assignment code here
var generateBtn = document.querySelector("#generate");

// Define password criteria
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLength = 0;
var password = "";

// Prompt the user to select password length
function getPasswordLength() {
  passwordLength = prompt("How many characters would you like your password to be? (must be between 8 and 12)");
  
  // Validate user input
  if (passwordLength < 8 || passwordLength > 12) {
    alert("Invalid password length. Password length must be between 8 and 12 characters.");
    getPasswordLength();
  }
}

// Generate password based on user-selected criteria
function generatePassword() {
  // Get password length from user
  getPasswordLength();
  
  // Define character pool based on user-selected criteria
  var charPool = "";
  var useUppercase = confirm("Do you want to include uppercase characters?");
  var useLowercase = confirm("Do you want to include lowercase characters?");
  var useNumbers = confirm("Do you want to include numeric characters?");
  var useSpecial = confirm("Do you want to include special characters?");
  
  // Validate user input
  if (!useUppercase && !useLowercase && !useNumbers && !useSpecial) {
    alert("You must select at least one type of character to include in your password.");
    generatePassword();
  }
  
  // Build character pool
  if (useUppercase) {
    charPool += uppercaseChars;
  }
  if (useLowercase) {
    charPool += lowercaseChars;
  }
  if (useNumbers) {
    charPool += numberChars;
  }
  if (useSpecial) {
    charPool += specialChars;
  }
  
  // Generate password
  for (var i = 0; i < passwordLength; i++) {
    password += charPool.charAt(Math.floor(Math.random() * charPool.length));
  }
  
  // Return generated password
  return password;
}

// Write generated password to the page
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);