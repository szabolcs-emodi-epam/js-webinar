/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */
function del(obj, prop) {
    if (obj instanceof Object) {
        let result = clone(obj);
        delete result[prop];
    } else {
        throw new Error('invalid parameter');
    }
    return prop;
}

function clone(src) {
    return Object.assign({}, src);
}
module.exports = del;