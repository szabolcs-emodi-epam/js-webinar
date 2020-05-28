/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */
function reverse(obj) {
    if (obj instanceof Object) {
        let result = {};
        for (let [key, value] of Object.entries(obj)) {
            result[value] = key;
        }
        return result;
    } else {
        throw new Error('invalid parameter');
    }
}
function clone(src) {
    return Object.assign({}, src);
}
module.exports = reverse;