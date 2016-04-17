export default function loadLocales(url, options, callback, data) {
    try {
        console.log('url', url);
        let waitForLocale = require('bundle!./en.json');
        waitForLocale((locale) => {
            callback(locale, {status: '200'});
        })
    } catch (e) {
        callback(null, {status: '404'});
    }
}
