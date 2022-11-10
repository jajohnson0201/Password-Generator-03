// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //var options
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "_", "+", ")",];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
  //pass selection makes a string out of every true boolean response to the window.confirms
  var passSelection = ("");


  var passLength = window.prompt("enter a length of password desired between 8 and 128 characters");
  verifyPass();
  //password has to be between 8-128 characters in length and has to be a number input...
  function verifyPass() {
    if (passLength < 8 ||
      passLength > 128) {
      passLength = window.prompt("PASSWORD HAS TO BE BETWEEN 8 and 128 characters.");
      verifyPass();
    } else if (isNaN(passLength)) {
      passLength = window.prompt("Password has to be a Number Input between 8 and 128 characters.");
      verifyPass();
    }

  }

  console.log(passLength);

  // these window.confirms generate a string of the different variables when selected...
  var specialcharconf = window.confirm("Do you want special characters?");

  console.log(specialcharconf);

  if (specialcharconf) {
    var passSelection = passSelection.concat(specialChar)
  };

  var lowercaseconf = window.confirm("Do you want lowercase letters?");
  console.log(lowercaseconf);
  if (lowercaseconf) {
    var passSelection = passSelection.concat(lowercaseLetters)
  };

  var uppercaseconf = window.confirm("Do you want UPPERCASE letters?");
  console.log(uppercaseconf);
  if (uppercaseconf) {
    var passSelection = passSelection.concat(uppercaseLetters);

  };

  var numbersconf = window.confirm("Do you want numbers?");
  console.log(numbersconf);
  if (numbersconf) {
    var passSelection = passSelection.concat(numbers)
  };

  //this functions purpose is to find out the length of the total character types(1-4)
  charAddAnswer();
  function charAddAnswer() {
    var charAnswers = [];
    if (specialcharconf) {
      sc = charAnswers.push(specialcharconf)
    };
    if (lowercaseconf) {
      lc = charAnswers.push(lowercaseconf)
    };
    if (uppercaseconf) {
      uc = charAnswers.push(uppercaseconf)
    };
    if (numbersconf) {
      nc = charAnswers.push(numbersconf)
    };
    return charAnswers;
  }
  var answerValue = charAddAnswer()
  console.log(answerValue);

  //this is to make sure at least one of the choices is true.
  if (!specialcharconf && !numbersconf && !uppercaseconf && !lowercaseconf) {
    window.alert("you are required to select at least 1 option...");
    generatePassword();
  }

  console.log(passSelection);
  console.log(typeof passSelection);

  //this is to remove the commas from the string made for the character selection...
  passSelection = passSelection.replaceAll(",", "");

  //this actually generates the password with the previous parameters(size and character type)
  function generateP() {
    var p = '';
    var s = '';
    var l = '';
    var u = '';
    var n = '';
    var pas = ('');
    //push method,
    if (specialcharconf) {
      s += specialChar[Math.floor(Math.random() * specialChar.length)];
      console.log(s);
      pas.concat(s);
    }
    console.log(typeof s)
    if (lowercaseconf) {
      l += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
      console.log(l);
      pas.concat(l);
    }
    console.log(typeof l)
    if (uppercaseconf) {
      u += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
      console.log(u);
      pas.concat(u);
    }
    console.log(typeof u)
    if (numbersconf) {
      n += numbers[Math.floor(Math.random() * numbers.length)];
      console.log(n);
      pas.concat(n);
    }
    console.log(typeof n)
    for (var x = 0; x < (passLength - answerValue.length); x++) {
      p += passSelection[Math.floor(Math.random() * passSelection.length)];
      console.log(p);
    }
    pas.concat(p);
    pas = (p + s + l + u + n);
    console.log(typeof p);
    console.log("Password String: " + pas);
    console.log(typeof pas);

    //this makes the string into an array - to shuffle
    var pasArray = pas.split('');
    //this function takes the array and shuffles it...
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(pasArray);
    console.log(pasArray);

    //this is to make the array back to a string with no ","...
    var shuffledPassString = pasArray.toString();
    shuffledPassString = shuffledPassString.replaceAll(",", "");
    console.log(shuffledPassString);


    return shuffledPassString;
  }
  var passwordNew = generateP();
  passwordNew = passwordNew.replaceAll(",", "");

  return passwordNew;

}

