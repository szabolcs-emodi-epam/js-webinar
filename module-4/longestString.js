/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString(items) {
    let result = '';
    if (Array.isArray(items)) {
        let sorted = items.sort();
        let prev = sorted[0];    
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i].length > prev.length) {
                prev = sorted[i];
            }
        }
        result = prev;
    } 
    return result;
}
module.exports = longestString;