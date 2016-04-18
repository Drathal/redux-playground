/**
 * mock i18n
 **/
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

var resources = {
    en: {}
}

export default (translation, ns = 'common') => {

    var options = {
        defaultNS: ns,
        resources,
        lng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false
        }
    }

    options.resources.en[ns] = translation

    return i18n
        .use('en')
        .init(options);
};
