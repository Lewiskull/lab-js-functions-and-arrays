// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(maxOfTwoNumbers(2, 6))




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
   if (words.length === 0){
    return null;
   }

let longest = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}
return longest;
}

console.log(findLongestWord(words))
console.log(findLongestWord([]))


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}

console.log(sumNumbers(numbers))




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = sumNumbers(numbers2);
    let average = sum / numbers2.length;
    
    return average;
}

console.log(averageNumbers(numbers2))




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
       if (words2.length === 0){
    return null;
   }

for (let i = 0; i < words2.length; i++) {
      if (words2[i] === word) {
        return true;
    }
}

    return false
}

console.log(doesWordExist(words2, "subset"));
console.log(doesWordExist(words2, "banana"));
console.log(doesWordExist([], "matter"))