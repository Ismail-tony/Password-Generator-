// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    const passwordLength = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be between 8 and 128 characters');
    return;
  };

  const specialCharacters = confirm('Click OK to confirm including special characters.'); 
  const numericCharacters = confirm('Click OK to confirm including numeric characters.');
  const lowerCasedCharacters = confirm('Click OK to confirm including lowercase characters.');
  const upperCasedCharacters = confirm('Click OK to confirm including uppercase characters.');
  if (!specialCharacters && !numericCharacters && !lowerCasedCharacters && !upperCasedCharacters) {
    alert('Please select at least one character type.');
    return passOption;
  }
  const passOption = { // main password options to return to when non of the options are selected.
    passwordLength : passwordLength,
    specialCharacters : specialCharacters,
    numericCharacters : numericCharacters,
    lowerCasedCharacters : lowerCasedCharacters,
    upperCasedCharacters : upperCasedCharacters,
  };
  return passOption;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  const options = getPasswordOptions();
  if (!options) return;

  let password = '';
  let selectedCharacters = [];

  if (options.specialCharacters) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
    password += getRandom(specialCharacters); // Ensure at least one special character
  } 

  if (options.numericCharacters) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
    password += getRandom(numericCharacters); // Ensure at least one numeric character
  }

  if (options.lowerCasedCharacters) {
    selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
    password += getRandom(lowerCasedCharacters); // Ensure at least one lowercase character
  }

  if (options.upperCasedCharacters) {
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
    password += getRandom(upperCasedCharacters); // Ensure at least one uppercase character
  }

  const remainingLength = options.passwordLength - password.length;
  for (let i = 0; i < remainingLength; i++) {
    password += getRandom(selectedCharacters);
  }

  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);