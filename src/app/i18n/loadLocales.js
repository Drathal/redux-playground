export default function loadLocales(url, options, callback, data) {
    try {

        let waitForLocale

        if (url.includes('common/i18n/') || url.includes('translation/i18n/')) {
            waitForLocale = require('bundle!./en.json')
        } else {
            waitForLocale = require('bundle!../../components/' + url + '.json')
        }

        waitForLocale((locale) => {
            callback(locale, {status: '200'})
        })
    } catch (e) {
        callback(null, {status: '404'})
    }
}
