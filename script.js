function palindrome(str){
		const n = str.length
	const arr = str.toLowerCase().split("")
	if(arr.join() == arr.reverse().join()){
		return true
	}
	else{
	  return false
	}

}
module.exports = palindrome