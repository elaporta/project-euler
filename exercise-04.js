/*
    A palindromic number reads the same both ways.
    The largest palindrome made from the product of two-digit numbers is 9009 = 91 x 99
    Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = value => {
    value = String(value);
    return value === value.split('').reverse().join('');
}

const bruteforce = (maxValue = 999, minValue = 100) => {
    let palindromeList = [];

    for(let i = maxValue; i > minValue; i--) {
        for(let j = maxValue; j > minValue; j--) {
            const product = i * j;
            if(isPalindrome(product)) palindromeList.push(product);
        }
    }

    return Math.max(...palindromeList);
}

console.log('Bruteforce:', bruteforce());