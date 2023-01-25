// complete the given function

function palindrome(str){

    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 'false' ;
        }
    }
    return 'true';
}


//const str = prompt('Enter a string: ');

const value = palindrome(str);

console.log(value);

module.exports = palindrome
