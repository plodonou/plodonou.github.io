function myFunctionTest(expected, found) {
      if (expected === found) {
        return "TEST SUCCEEDED";
      } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
      }
}

function max(firstNum, secondNum){
  
      if (firstNum > secondNum) {
         console.log(firstNum + " is larger than " + secondNum);
      } else {
          console.log(firstNum + " is less than " + secondNum);
      }
      return;
    
  }
  // Lets set two numbers
  console.log("Expected output of max(142,234) is 234  " + myFunctionTest(234, max(142, 234)));



  function maxOfThree (num1, num2, num3) {     
      return Math.max (num1, num2, num3); 
  }
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));



function isVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

console.log("Expected output of isVowel(A) is true  " + myFunctionTest(true, isVowel('A'))); 

// Set addition
function sum(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

// Print out the total to the console
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4]))); 



// Set multiplication
function multiply(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
// Print out the total to the console
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4]))); 



function reverse(str) {
      var text = '';
      
      for (var i = str.length - 1; i >= 0; i--) {
            text += str[i];
            continue
      }
      return text.toLowerCase();
  }
  console.log(reverse("jag testar"));
  console.log("Expected output of reverse('jag testar') is 24  " + myFunctionTest("ratset gaj", reverse("jag testar"))); 


function longestWord(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}


console.log(longestStringForLoop(['boop', 'bloomburg', 'hello']));

