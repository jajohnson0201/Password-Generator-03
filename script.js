// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var  password= generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  
  //var options={
   var numbers= ['1','2','3','4','5','6','7','8','9','0',];
   var specialChar= ["!","@","#","$","%","^","&","*","(","_","+",")",];
   var lowercaseLetters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
   var uppercaseLetters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
   var passSelection= ("");
   

  var passLength = window.prompt("enter a length of password desired between 8 and 128 characters");
  
  while (passLength < 8 ||
    passLength > 128) { 
      passLength = window.prompt("enter a length of password desired between 8 and 128 characters");
    }
console.log(passLength);

  var specialcharconf = window.confirm("Do you want special characters?");

    console.log(specialcharconf);

    if (specialcharconf){
      var passSelection =   passSelection.concat(specialChar)
      };

  var lowercaseconf = window.confirm("Do you want lowercase letters?");

    console.log(lowercaseconf);

    if (lowercaseconf){
      var passSelection =   passSelection.concat(lowercaseLetters)
      };

  var uppercaseconf = window.confirm("Do you want UPPERCASE letters?");

    console.log(uppercaseconf);

    if (uppercaseconf){
      var passSelection =   passSelection.concat(uppercaseLetters)
      };

  var numbersconf = window.confirm("Do you want numbers?");

    console.log(numbersconf);

    if (numbersconf){
      var passSelection =   passSelection.concat(numbers)
      };

  window.alert("generating your password");

  console.log(passSelection);
  console.log(typeof passSelection);
  passSelection = passSelection.replaceAll(",","");
  
  function generateP() {
    var p = '';
    for (var x = 0; x < passLength; x ++){
      p += passSelection[Math.floor(Math.random() * passSelection.length)];
      console.log(p);
    } 

    console.log("Password String: " + p);
    console.log(typeof p);
    
    return p;
  }
  var password = generateP();
  window.alert("This is your randomly generated password: " + password);
  console.log(generateP());


  /*
  let varGlobal = 5;

  function noParams() {
    let varA = 10;

    let result = varGlobal + varA;
    result = withParams(result);
    return [result, varA, 9, "Bingo"];
  }

  var testing = noParams()

  function withParams(anything) {
    let newResult = 5 + anything;
    return newResult;
  }


  // We define the function
  function name(parameter_1, parameter_2) {
    console.log(parameter_1)
    console.log(parameter_2);
    let test = parameter_1;

    return function nestedFunction() {
      console.log(test)
    }
  }

  // here we invoke/call the function
  name("Bingo", "Chicken");
  let result = name(5, 2);
  result();

*/



  /*
    function(specialcharconf):{
      for (var x =0; x < passLength; x++){
        var randomspecialchar = math.floor(math.random()* specialChar.length)
      }
    }
  */

  /*
  if (specialcharconf && lowercaseconf && uppercaseconf && numbersconf){
    
  for (var x = 0; x < passLength; x++){
    
  var randomCharNum = Math.floor(Math.random() * options.length);
  var randomChar = randomCharNum[x];
   

  console.log(randomChar);
    }
  } 
  */


}
