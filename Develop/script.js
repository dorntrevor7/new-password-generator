// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  // GIVEN I need a new, secure password
  var password = "";

  var question1 = prompt(
    "How many characters would you like your password to be between 8 to 128"
  );

  if (!question1) {
    return;
  }

  var numChoice = parseInt(question1);

  if (numChoice < 8 && numChoice > 128) {
    return;
  }
  if (numChoice >= 8 && numChoice <= 128) {
    var question2 = confirm("Do you want capital letters?");
    var question3 = confirm("Do you want lowercase letters?");
    var question4 = confirm("Do you want numbers");
    var question5 = confirm("Do you want special characters");

    if (numChoice >= 8 && numChoice <= 128) {
      for (var i = 0; i < numChoice; i++) {
        var newPassword = "";
        if (question2) {
          var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var ranCap = cap[Math.floor(Math.random() * cap.length)];
          newPassword = newPassword.concat(ranCap);
        }
        if (question3) {
          var low = "abcdefghijklmnopqrstuvwxyz";
          var ranLow = low[Math.floor(Math.random() * low.length)];
          newPassword = newPassword.concat(ranLow);
        }
        if (question4) {
          var newNumber = Math.floor(Math.random() * 11);
          var number = parseFloat(newNumber);
          newPassword = newPassword.concat(number);
        }
        if (question5) {
          var special = "!@#$%^&*(){}[]?";
          var ranSpecial = special[Math.floor(Math.random() * special.length)];
          newPassword = newPassword.concat(ranSpecial);
        }
        password = password.concat(newPassword);
      }
    }

    passwordText.value = password.slice(0, numChoice);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
