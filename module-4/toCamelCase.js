/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(toConvert) {
    if (/^\d+$/.test(toConvert)) {
        return "";
    }
    console.log("toConvert: " + toConvert);
    let splitted = toConvert.replace(/[\'\"\+\!\%\/\=\(\)\?']/g, '').split(" ").filter(value => value !== '');
    let result = splitted[0].toLowerCase();
    for (let i = 1; i < splitted.length; i++) {
        result = result + splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1);
    }
    return result;
}
module.exports = toCamelCase;