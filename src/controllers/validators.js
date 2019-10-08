/**
 * 
 * @param {String} value 
 * 
 * @returns
 *  A boolean value representing the value.
 */
let isEmpty = (value) => {
    if (value === null || value === undefined || value === '') return true;
    else return false;
}

/**
 * 
 * @param {String} value 
 * 
 * @returns
 *  A boolean value representing the value.
 */
let isValid = (value) => {
    if (isEmpty(value.text) || isEmpty(value.channel_name) || isEmpty(value.channel_id)) return false;
    else return true;
}

/**
 * 
 * @param {String} value 
 * 
 * @returns
 *  A boolean value representing the value.
 */
let isPresent = (task1, task2) => {
    if (task1.name === task2.name && task1.channelName === task2.channelName
        && task1.channelId === task2.channelId) return true;
    else return false;
}

module.exports = {
    isEmpty: isEmpty,
    isValid: isValid,
    isPresent: isPresent
} 