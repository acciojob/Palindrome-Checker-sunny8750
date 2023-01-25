// complete the given function

function palindrome(str) {
  let newStr = str.replace(/\W/g, '');
  newStr = newStr.replace('_', '').toLowerCase();
newStr = str.replace(/[^a-zA-Z0-9]/g, '');
  let revStr = newStr.split('').reverse().join('');
  if(newStr === revStr){
    return true;
  }
  return false;
}


const str = prompt('Enter a string: ');

const value = palindrome(str);

document.write(value);

module.exports = palindrome
