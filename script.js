// complete the given function

function palindrome(str){
// program to check if the string is palindrome or not

    
    let len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const str = prompt('Enter a string: ');

const value = palindrome(str);

console.log(value);

module.exports = palindrome
