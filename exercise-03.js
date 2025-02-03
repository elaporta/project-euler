/*
    Exercise 3
    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143?
*/

const normal = value => {
    let result = 1;
    let lastFactor = 1;

    for(let i = 2; i < value; i++) {
        lastFactor = i;

        while(lastFactor % i === 0) {
            lastFactor = lastFactor / i;
        }
        if(value % i === 0) result = i;
    }

    return result;
};

const recursive = (value, a = 0, b = 1) => {
    // base
    if(b >= value) return 0;

    // recursive: positive case
    if(b % 2 === 0) return b + recursive(value, b, a + b);

    // recursive: negative case
    return recursive(value, b, a + b);
};

const VALUE = 20;
console.log('Normal:', normal(VALUE));
// console.log('Recursive:', recursive(VALUE));

// 10