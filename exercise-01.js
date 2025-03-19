/*
    Exercise 1
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
    The sum of these multiples is 23
    Find the sum of all the multiples of 3 or 5 below 1000
*/

const normal = (limit) => {
    let total = 0;

    for(let i = 1; i < limit; i++) {
        if(i % 3 === 0 || i % 5 === 0) total += i;
    }

    return total;
};

const recursive = (limit) => {
    const currentNumber = limit - 1;

    // base
    if(currentNumber < 3) return 0;

    // recursive: positive case
    if(currentNumber % 3 === 0 || currentNumber % 5 === 0) return currentNumber + recursive(limit - 1);

    // recursive: negative case
    return recursive(limit - 1);
};

const LIMIT = 1000;
console.log('Normal:', normal(LIMIT));
console.log('Recursive:', recursive(LIMIT));