// Assignment Code
var generateBtn = document.querySelector("#generate");
var charTypeArray = []

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  //clears the array if you click button multiple times
  charTypeArray = []
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password


  passwordText.value = password;
}

//function to determine the variety of characters included
function charType() {
  var upperCaseCon = confirm("Would you like to include Upper Case Letters?");
  var lowerCaseCon = confirm("Would you like to include Lower Case Letters?");
  var numbersCon = confirm("Would you like to include Numbers?");
  var specialCharsCon = confirm("Would you like to include Special Characters?");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  if(upperCaseCon) {
    charTypeArray.push(upperCase)}
  if(lowerCaseCon){
    charTypeArray.push(lowerCase)
  }
  if(numbersCon) {
    charTypeArray.push(numbers)
  }
  if(specialCharsCon) {
    charTypeArray.push(specialChars) 
  }
  console.log(charTypeArray);

  // if (upperCaseCon && lowerCaseCon && numbersCon && specialCharsCon) {
  //   charTypeArray = [upperCase, lowerCase, numbers, specialChars]
  //   console.log(charTypeArray);

  // } else if (upperCaseCon && lowerCaseCon && numbersCon) {
  //   charTypeArray = [upperCase, lowerCase, numbers]
  //   console.log(charTypeArray);

  // } else if (upperCaseCon && lowerCaseCon && specialCharsCon) {
  //   charTypeArray = [upperCase, lowerCase, specialChars]
  //   console.log(charTypeArray);

  // } else if (upperCaseCon && numbersCon && specialCharsCon) {
  //   charTypeArray = [upperCase, numbers, specialChars]
  //   console.log(charTypeArray);

  // } else if (lowerCaseCon && numbersCon && specialCharsCon) {
  //   charTypeArray = [lowerCase, numbers, specialChars]
  //   console.log(charTypeArray);

  // } else if (upperCaseCon && lowerCaseCon) {
  //   charTypeArray = [upperCase, lowerCase]
  //   console.log(charTypeArray);

  // } else if (upperCaseCon && numbersCon) {
  //   charTypeArray = [upperCase, numbers]
  //   console.log(charTypeArray);

  // } else if (upperCaseCon && specialCharsCon) {
  //   charTypeArray = [upperCase, specialChars]
  //   console.log(charTypeArray);

  // } else if (lowerCaseCon && numbersCon) {
  //   charTypeArray = [lowerCase, numbers]
  //   console.log(charTypeArray);

  // } else if (lowerCaseCon && specialCharsCon) {
  //   charTypeArray = [lowerCase, specialChars]
  //   console.log(charTypeArray);

  // } else if (numbersCon && specialCharsCon) {
  //   charTypeArray = [numbers, specialChars]
  //   console.log(charTypeArray);

  // } else if (upperCaseCon) {
  //   charTypeArray = [upperCase]
  //   console.log(charTypeArray);

  // } else if (lowerCaseCon) {
  //   charTypeArray = [lowerCase]
  //   console.log(charTypeArray);

  // } else if (numbersCon) {
  //   charTypeArray = [numbers]
  //   console.log(charTypeArray);

  // } else if (specialCharsCon) {
  //   charTypeArray = [specialChars]
  //   console.log(charTypeArray);

  // }
  

}


function generatePassword() {

  var length = prompt("Please pick a length between 8 and 128 characters.")
  length = parseInt(length);
  //validation
  if (8 <= length || length >= 128) {
    console.log(typeof length); //confirm that length is an int type
    charType();
    console.log(charTypeArray);
    var password = "";
    var randomInt = 0;
    var randomArray = "";

    for (var i = 0; i < length; i++) {
      //select a random int from our array of desired characters
      randomArray = charTypeArray[Math.floor(Math.random() * charTypeArray.length)];
      console.log(randomArray);
      //select an int from the randomly selected array and prints
      randomInt = randomArray[Math.floor(Math.random() * randomArray.length)];
      console.log(randomInt);
      //concatenates each random int to the desired length and prints the length in the console
      password = password.concat(randomInt);
    }
  } else {
    alert("Please pick only numbers between 8 and 128.");
  }
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  
  
  
  
  
  console.log(password.length);
  return password;
}
