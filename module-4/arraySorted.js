/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
function arraySorted(items, ignore) {
    let result = true;
    let previous =  ignoring(items[0], ignore);
    for (let i = 1; i < items.length; i++) {
        if (Array.isArray(items[i])) {
            result = arraySorted(item, ignore);
        } else {
            let tmp = ignoring(items[i], ignore);
            if (tmp < previous) {
                result = false;
                break;
            }
        }
    }
    return result;
}

function ignoring(item, ignore) {
    let tmp = item;
    if (typeof item === "string") {
        tmp = item.toLowerCase().replace(/\s/g, '');
        if (ignore != undefined) {
            for (let s = 0; s < ignore.length; s++) {
                tmp = tmp.split(ignore.charAt(s)).join('');
            }
        }
    }
    return tmp;
}
module.exports = arraySorted;