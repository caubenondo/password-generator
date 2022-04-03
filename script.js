// BASE ARRAYS
// look up table ASCII https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
// look up table for special character

// Why doing it this way? I'm lazy to type out the whole character set
const uppercaseLettersArray = charLookup(65, 90);
const lowercaseLeetersArray = charLookup(97, 122);
const numberArray = charLookup(48, 57);
const specialCharsArray = charLookup(33, 47)
  .concat(charLookup(58, 64))
  .concat(charLookup(91, 96))
  .concat(charLookup(123, 126));
function charLookup(start, end) {
  let arrayOfChar = [];
  for (let i = start; i <= end; i++) {
    arrayOfChar.push(String.fromCharCode(i));
  }
  return arrayOfChar;
}
// console.log("Alphabet", uppercaseLettersArray);
// console.log("lowercase", lowercaseLeetersArray);
// console.log("number", numberArray);
// console.log("Special char ", specialCharsArray);

function generatePassword() {
  let userInput = prompt("how long is the password? Enter a number");
  //prompt only take string
  // convert to int number by parseInt
  const passLength = parseInt(userInput);
  // when number of pass length is valid, generate passString
  if (Number.isInteger(passLength)) {
    if (passLength >= 8 && passLength <= 128) {
      //place holder for passString, return/output of this function
      let passString = "";
      // confirm with user about the requiments,
      // then set up the array of acceptable chars
      let acceptedArray = acceptableArrayGenerator();
      // generate the passString by looping through passLength times
      for (let i = 0; i < passLength; i++) {
        // assign a random character in acceptedArray by using random index
        passString +=
          acceptedArray[Math.floor(Math.random() * acceptedArray.length)];
      }
      return passString;
    } else {
      return "Password must has at least 8 chars and less than 128 chars";
    }
  } else {
    return "Make sure you type a number in password length";
  }
}

function acceptableArrayGenerator() {
  // placeholder array
  let acceptedArray = [];
  if (confirm("lowercase characters?")) {
    // regular way
    // acceptedArray = acceptedArray.concat(lowercaseLeetersArray);
    acceptedArray.push(...lowercaseLeetersArray);
    // fancier way
  }
  if (confirm("UPPERCASE CHARACTERS? ")) {
    // acceptedArray = acceptedArray.concat(uppercaseLettersArray);
    acceptedArray.push(...uppercaseLettersArray);
  }
  if (confirm("numbers [0-9]?")) {
    // acceptedArray = acceptedArray.concat(numberArray);
    acceptedArray.push(...numberArray);
  }
  if (confirm("special characters?")) {
    // acceptedArray = acceptedArray.concat(specialCharsArray);
    acceptedArray.push(...specialCharsArray);
  }
  if (acceptedArray.length == 0) {
    // make sure user select one of the requirement
    alert("Please pick as meet 1 requirement!");
    return acceptableArrayGenerator();
  } else {
    // console.log(acceptedArray);
    // return acceptedArray that meet requirements
    return acceptedArray;
  }
}

// PROVIDED CODE
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
