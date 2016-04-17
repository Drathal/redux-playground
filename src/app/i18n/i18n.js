import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import loadLocales from './loadLocales'

i18n.use(XHR)
    .use(LanguageDetector)
    .init({
        whitelist: ['en'],
        lng: 'en',
        load: 'en',
        fallbackLng: 'en',
        defaultNS: 'common',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: '{{lng}}-{{ns}}',
            parse: (data) => data,
            ajax: loadLocales
        }
    }, (err, t) => {

    });

export default i18n;
