/*
    Exercise 3
    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143?
*/

const normal = value => {
    let lastFactor = 2;

    while(value > 1) {
        if(value % lastFactor === 0) {
            value = value / lastFactor;
        }
        else {
            lastFactor++;
        }
    }

    return lastFactor;
};

const recursive = (value, lastFactor = 2) => {
    // base
    if(value <= 1) return lastFactor;

    // recursive: positive case
    if(value % lastFactor === 0) return recursive(value / lastFactor, lastFactor);

    // recursive: negative case
    return recursive(value, lastFactor + 1);
};

const VALUE = 600851475143;
console.log('Normal:', normal(VALUE));
console.log('Recursive:', recursive(VALUE));