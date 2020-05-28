/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci = 0;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...

    // ...AND THIS COMMENT LINE!
    if (n < 1) {
        nThFibonacci = 0;
    }
    else if (n <= 1) {
        nThFibonacci = 1;
    } else {
        nThFibonacci1 = 0;
        nThFibonacci2 = 1;
        for (let i = 1; i != n; i++) {
            nThFibonacci = nThFibonacci1 + nThFibonacci2;
            nThFibonacci1 = nThFibonacci2;
            nThFibonacci2 = nThFibonacci;
        }
    }
    return nThFibonacci;
}
module.exports = fibonacci;