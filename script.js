// Assignment Code
var generateBtn = document.querySelector("#generate");

var options={
 numbers: [1,2,3,4,5,6,7,8,9,0],
 specialChar: ["!","@","#","$","%","^","&","*","(","_","+",")",],
 lowercaseLetters: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
 uppercaseLetters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
   
  var passLength = window.prompt("enter a length of password desired between 8 and 128 characters");
  
  while (passLength <= 8 ||
    passLength >= 128) { 
      passLength = window.prompt("enter a length of password desired between 8 and 128 characters");
    }
console.log(passLength);

  var specialcharconf = window.confirm("Do you want special characters?");

    console.log(specialcharconf)

  var lowercaseconf = window.confirm("Do you want lowercase letters?");

    console.log(lowercaseconf)

  var uppercaseconf = window.confirm("Do you want UPPERCASE letters?");

    console.log(uppercaseconf)

  var numbersconf = window.confirm("Do you want numbers?")

    console.log(numbersconf)

  window.alert("generating your password")
  
  

}
