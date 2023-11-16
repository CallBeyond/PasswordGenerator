var generateBtn = document.querySelector("#generate");

function writePassword() {
  function generatePassword() {
    // Promps the user to enter what desired length they want of their Password
    var length = parseInt(prompt("Enter the length of your password (between 8 to 128 characters!): "));

    // Converts the prompt to int and checks the length
    // if its incorrect it'll give return with nothing and give them a prompt to enter a valid length
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid length between 8 and 128.");
      return ""; 
    }

    // Getting the criteria of the password from the user
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumbers = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    // Double checks to make sure that at least one of the criteria's are included in the PW generation
    // if its incorrect it'll give return with nothing
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
      alert("Please select at least one character type.");
      return "";
    }

    // defining the characters in the asked criteria
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()-_=+[{]};:|,<.>/?";

    // Combining all the criteria that was accepted by the user into availableChars
    // basically doing it this way so that I can randomize the text in the next function
    var availableChars = "";
    if (includeLowercase) availableChars += lowercaseChars;
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSpecial) availableChars += specialChars;

    // Generating the password using available characters from availableChars
    var generatedPassword = "";
    for (var i = 0; i < length; i++) {
      var randomPassword = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars.charAt(randomPassword);
    }
    return generatedPassword;

  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
// ! When clicked the writePassword function is ran
generateBtn.addEventListener("click", writePassword);
