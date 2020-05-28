/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum(items) {
    let result = 0;
    for (let i = 0; i < items.length; i++) {
        if (Array.isArray(items[i])) {
            result += arraySum(items[i]);
        } else if (typeof items[i] === "number") {
            result += items[i];
        }
    }
    return result;
}
module.exports = arraySum;