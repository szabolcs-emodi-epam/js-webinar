/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */
module.exports = function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec > 10 ? 10000 : sec * 1000)
    );
}