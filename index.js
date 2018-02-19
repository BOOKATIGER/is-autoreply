
/**
 * Convert header names to lower case and normalize value to string.
 * @param {Object} headers  - Key/value object of headers
 * @return {Object}         - Normalized headers
 */
const normalizedHeaders = (headers) => {
    var normalized = {};
    Object.keys(headers).forEach((key) => {
        normalized[key.toLowerCase()] = "" + [headers[key]];
    });
    return normalized;
}

/**
 * Check if email is autoreply according to headers.
 * @param {Object} headers  - Email headers as key/value object
 * @return {boolean}        - True if autoreply, false otherwise
 */
module.exports = (headers) => {
    // TODO: maybe if headers is a string, we can parse it as email headers using a NPM module

    headers = normalizedHeaders(headers);

    // Detections according to <https://github.com/jpmckinney/multi_mail/wiki/Detecting-autoresponders>
    if ('auto-submitted' in headers && headers['auto-submitted'].toLowerCase() !== 'no') {
        return true;
    }
    if ('return-path' in headers && headers['return-path'] === '<>') {
        return true;
    }
    // TODO: add more here

    // Detecting MS Exchange/Outlook according to <https://msdn.microsoft.com/en-us/library/ee219609(v=exchg.80).aspx>
    if ('x-auto-response-suppress' in headers && headers['x-auto-response-suppress'].toLowerCase() !== 'none') {
        return true;
    }

    // By default email is not autoreply
    return false;
};
