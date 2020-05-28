/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */
function arrayEqual(first, second) {
    let result = true;
    if (first.length !== second.length) {
        console.warn('different lengths, the first array length is ' + first.length + ' but the second array length is ' + second.length);
        result = false;
    }

    for (let i = 0; i < first.length; i++) {
        if (Array.isArray(first[i]) && Array.isArray(second[i])) {
            result = arrayEqual(first[i], second[i]);
        }else if (first[i] !== second[i]) {
            console.warn("Different element on the index " + i + ", first array: " + first + ", second array: " + second);
            result = false;
            break;
        }
    }
    return result;
}

module.exports = arrayEqual;